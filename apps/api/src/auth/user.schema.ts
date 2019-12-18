import { User } from '@api/auth/auth-user.model';
import { SchemaCollection } from '@api/shared/collections';
import { Document, Schema, SchemaDefinition, SchemaTypes } from 'mongoose';

const userSchemaDefinition: Record<keyof Omit<User, '_id'>, SchemaDefinition['']> = {
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
  pushSubscriptions: [{
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
  }]
};

export type UserDocument = Readonly<Document> & User;

export const UserSchema = new Schema(userSchemaDefinition, {
  versionKey: false
});

export const UserSchemaModel = {
  name: SchemaCollection.User,
  schema: UserSchema
};
