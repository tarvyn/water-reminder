import { Auditable, NotificationDto } from '@water-reminder/api-interfaces';
import { Document, Schema, SchemaDefinition, SchemaTypes } from 'mongoose';
import { SchemaCollection } from '../shared/collections';

type NotificationDefinitionKeys = keyof Omit<NotificationDto, keyof Auditable>;

const notificationSchemaDefinition: Record<
  NotificationDefinitionKeys,
  SchemaDefinition['']
> = {
  message: {
    type: SchemaTypes.String,
    required: true
  },
  status: {
    type: SchemaTypes.Number,
    required: true
  },
  userId: {
    type: SchemaTypes.ObjectId,
    ref: SchemaCollection.User
  }
};

export type NotificationDocument = Readonly<Document> &
  NotificationDto;

export const NotificationSchema = new Schema(notificationSchemaDefinition, {
  versionKey: false,
  timestamps: true
});

export const NotificationSchemaModel = {
  name: SchemaCollection.Notification,
  schema: NotificationSchema
};
