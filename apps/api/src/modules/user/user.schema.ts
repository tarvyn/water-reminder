import { OmitId } from '@water-reminder/api-interfaces';
import { SchemaCollection } from '../shared/collections';
import { Document, Schema, SchemaDefinition, SchemaTypes } from 'mongoose';
import { User } from './user.model';

const userSchemaDefinition: Record<
  keyof OmitId<User>,
  SchemaDefinition['']
> = {
  email: {
    type: SchemaTypes.String,
    required: true
  },
  password: {
    type: SchemaTypes.String,
    required: false
  },
  firstName: {
    type: SchemaTypes.String,
    required: true
  },
  lastName: {
    type: SchemaTypes.String,
    required: false
  },
  imageUrl: {
    type: SchemaTypes.String,
    required: false
  },
  provider: {
    type: SchemaTypes.String,
    required: false
  },
  thirdPartyId: {
    type: SchemaTypes.String,
    required: false
  },
  pushSubscriptions: [
    {
      endpoint: {
        type: SchemaTypes.String
      },
      keys: {
        auth: {
          type: SchemaTypes.String
        },
        p256dh: {
          type: SchemaTypes.String
        }
      }
    }
  ],
  awakeTime: {
    type: SchemaTypes.Number,
    required: false
  },
  sleepTime: {
    type: SchemaTypes.Number,
    required: false
  },
  nextDrinkTime: {
    type: SchemaTypes.Date,
    required: false
  },
  timeZone: {
    type: SchemaTypes.String,
    required: false
  }
};

export type UserDocument = Readonly<Document> & User;

export const UserSchema = new Schema(userSchemaDefinition, {
  versionKey: false
});

export const UserSchemaModel = {
  name: SchemaCollection.User,
  schema: UserSchema
};
