import { PushSubscriptionData, User } from './auth-user.model';
import { PASSWORD_HASH_COMPLEXITY, SocialProvider } from './auth.model';
import { UserDocument } from './user.schema';
import { SchemaCollection } from '@api/shared/collections';
import { WebPushService } from '@api/shared/services/web-push.service';
import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OmitId, UserDto, UserSignUpDto } from '@water-reminder/api-interfaces';
import { catchPromiseError } from '@water-reminder/utils';
import { hash } from 'bcryptjs';
import { Model } from 'mongoose';
import { Profile } from 'passport-google-oauth20';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(SchemaCollection.User)
    private readonly userModel: Model<UserDocument>,
    private readonly webPushService: WebPushService,
  ) {}

  async findById(id: string): Promise<UserDocument> {
    return this.userModel.findById(id);
  }

  async findByEmail(email: UserDto['email']): Promise<UserDocument> {
    return this.userModel.findOne({ email });
  }

  async create(userSignUpData: UserSignUpDto): Promise<UserDocument> {
    const hashedPassword = await hash(userSignUpData.password, PASSWORD_HASH_COMPLEXITY);
    const [createUserError, [user]] =
      await catchPromiseError(this.userModel.create([{
        ...userSignUpData,
        password: hashedPassword
      }]));

    if (createUserError) {
      throw createUserError;
    }

    return user;
  }

  async findOrCreate(profile: Profile, provider: SocialProvider): Promise<UserDocument> {
    const { id: thirdPartyId, photos, name: { familyName, givenName }, emails: [{ value: email }] } = profile;
    const [photo] = photos || [];
    const user: OmitId<UserDto> = {
      email,
      provider,
      thirdPartyId,
      imageUrl: photo?.value,
      firstName: familyName,
      lastName: givenName
    };
    const [findUserError, existingUser] =
      await catchPromiseError(this.userModel.findOne({ email }));

    if (findUserError) {
      throw new InternalServerErrorException('Error when searching user has occurred.');
    }

    if (existingUser) {
      return existingUser;
    }

    const [createUserError, [createdUser]] =
      await catchPromiseError(this.userModel.create([user]));

    if (createUserError) {
      throw new InternalServerErrorException('Error when creating user has occurred.');
    }

    return createdUser;
  }

  async updatePushSubscription(
    id: string,
    pushSubscription: PushSubscriptionData
  ): Promise<UserDocument> {
    const [findByIdAndUpdateError, user] =
      await catchPromiseError(
        this.userModel.findByIdAndUpdate(id, {
          pushSubscriptions: [pushSubscription]
        })
      );

    if (findByIdAndUpdateError) {
      throw new BadRequestException('User was not found');
    }

    return user;
  }

  async notifyUser(user: User): Promise<void> {
    const { pushSubscriptions } = user;
    const [pushSubscription] = pushSubscriptions;

    if (!pushSubscription) {
      console.log('subscription was not found for user', user.email);

      return;
    }

    const [error, sendNotificationResult] = await catchPromiseError(
      this.webPushService.sendNotification(
        pushSubscription,
        'You just successfully logged in'
      )
    );

    console.log('notification result', sendNotificationResult || error);
  }

  async notifyAllUsers(): Promise<void> {
    console.log('notifyAllUsers has been called');
    const users = await this.userModel.find();

    await Promise.all(users.map(user => {
      console.log('notifyUser was called for', user.email);
      this.notifyUser(user);
    }));
  }
}
