import { SchemaCollection } from '@api/shared/collections';
import { UserDto } from '@water-reminder/api-interfaces';
import { Document, Schema, SchemaDefinition, SchemaTypes } from 'mongoose';

const userSchemaDefinition: Record<keyof Omit<UserDto, '_id'>, SchemaDefinition['']> = {
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
  }
};

export type UserDocument = Readonly<Document> & UserDto;

export const UserSchema = new Schema(userSchemaDefinition, {
  versionKey: false
});

export const UserSchemaModel = {
  name: SchemaCollection.User,
  schema: UserSchema
};
