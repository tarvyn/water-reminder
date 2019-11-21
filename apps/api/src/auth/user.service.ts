import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDto } from '@water-reminder/api-interfaces';
import { catchPromiseError } from '@water-reminder/utils';
import { Model } from 'mongoose';
import { Profile } from 'passport-google-oauth20';
import { SchemaCollection } from '../shared/collections';
import { Provider } from './auth.service';
import { UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(SchemaCollection.User)
    private readonly userModel: Model<UserDocument>
  ) {}

  async findById(id: string): Promise<UserDto> {
    return this.userModel.findById(id);
  }

  async findOrCreate(profile: Profile, provider: Provider): Promise<UserDocument> {
    const { id: thirdPartyId, photos, name: { familyName, givenName }, emails: [{ value: email }] } = profile;
    const [photo] = photos || [];
    const user: UserDto = {
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
}
