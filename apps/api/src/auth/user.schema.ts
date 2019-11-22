import { SchemaCollection } from '@api/shared/collections';
import { UserDto } from '@water-reminder/api-interfaces';
import { Document, Schema, SchemaDefinition } from 'mongoose';

const userSchemaDefinition: Record<keyof UserDto, SchemaDefinition['']> = {
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: false
  },
  imageUrl: {
    type: String,
    required: false
  },
  provider: {
    type: String,
    required: false
  },
  thirdPartyId: {
    type: String,
    required: false
  }
};

export type UserDocument = Readonly<Document> & UserDto;

export const UserSchema = new Schema(userSchemaDefinition);

export const UserSchemaModel = {
  name: SchemaCollection.User,
  schema: UserSchema
};
