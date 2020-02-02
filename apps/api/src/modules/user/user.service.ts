import {
  BadRequestException,
  Injectable,
  InternalServerErrorException
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDto, UserSignUpDto } from '@water-reminder/api-interfaces';
import { catchPromiseError } from '@water-reminder/utils';
import { hash } from 'bcryptjs';
import { Model } from 'mongoose';
import { Profile } from 'passport-google-oauth20';
import { PASSWORD_HASH_COMPLEXITY, SocialProvider } from '../auth/auth.model';
import { SchemaCollection } from '../shared/collections';
import { WebPushService } from '../shared/services/web-push.service';
import { PushSubscriptionData, User } from './user.model';
import { UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(SchemaCollection.User)
    private readonly userModel: Model<UserDocument>,
    private readonly webPushService: WebPushService
  ) {}

  async find(): Promise<Array<UserDocument>> {
    return this.userModel.find();
  }

  async findById(id: string): Promise<UserDocument> {
    return this.userModel.findById(id);
  }

  async findByEmail(email: UserDto['email']): Promise<UserDocument> {
    return this.userModel.findOne({ email });
  }

  async findOrCreate(
    profile: Profile,
    provider: SocialProvider
  ): Promise<UserDocument> {
    const {
      id: thirdPartyId, photos,
      name: { familyName, givenName },
      emails: [{ value: email }]
    } = profile;
    const [photo] = photos || [];
    const user = {
      email,
      provider,
      thirdPartyId,
      imageUrl: photo?.value,
      firstName: familyName,
      lastName: givenName
    };
    const [findUserError, existingUser] = await catchPromiseError(
      this.userModel.findOne({ email })
    );

    if (findUserError) {
      throw new InternalServerErrorException(
        'Error when searching user has occurred.'
      );
    }

    if (existingUser) {
      return existingUser;
    }

    const [createUserError, [createdUser]] = await catchPromiseError(
      this.userModel.create([user])
    );

    if (createUserError) {
      throw new InternalServerErrorException(
        'Error when creating user has occurred.'
      );
    }

    return createdUser;
  }

  async create(userSignUpData: UserSignUpDto): Promise<UserDocument> {
    const hashedPassword = await hash(
      userSignUpData.password,
      PASSWORD_HASH_COMPLEXITY
    );
    const [error, [user]] = await catchPromiseError(
      this.userModel.create([
        {
          ...userSignUpData,
          password: hashedPassword
        }
      ])
    );

    if (error) {
      throw error;
    }

    return user;
  }

  async update(
    id: string,
    userData: Partial<UserDto>
  ): Promise<UserDocument> {
    const [error, user] = await catchPromiseError(
      this.userModel.findByIdAndUpdate(id, userData)
    );

    if (error) {
      throw new BadRequestException('User was not found');
    }

    return user;
  }

  async updatePushSubscription(
    id: string,
    pushSubscription: PushSubscriptionData
  ): Promise<UserDocument> {
    const [findByIdAndUpdateError, user] = await catchPromiseError(
      this.userModel.findByIdAndUpdate(id, {
        pushSubscriptions: [pushSubscription]
      })
    );

    if (findByIdAndUpdateError) {
      throw new BadRequestException('User was not found');
    }

    return user;
  }

  async notify(user: User, message: string): Promise<void> {
    const { pushSubscriptions } = user;
    const [pushSubscription] = pushSubscriptions;

    if (!pushSubscription) {
      console.log('subscription was not found for user', user.email);

      return;
    }

    const [error, sendNotificationResult] = await catchPromiseError(
      this.webPushService.sendNotification(pushSubscription, message)
    );

    console.log('notification result', sendNotificationResult || error);
  }
}
