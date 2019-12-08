import { SchemaCollection } from '@api/shared/collections';
import { DoseDto } from '@water-reminder/api-interfaces';
import { Document, Schema, SchemaDefinition, SchemaTypes } from 'mongoose';

type DoseSchemaDefinitionKeys = keyof Omit<DoseDto, '_id'>;

const doseSchemaDefinition: Record<DoseSchemaDefinitionKeys, SchemaDefinition['']> = {
  time: {
    type: SchemaTypes.Date,
    required: true
  },
  volume: {
    type: SchemaTypes.Number,
    required: true
  },
  userId: {
    type: SchemaTypes.ObjectId,
    ref: SchemaCollection.User
  }
};

export type DoseDocument = Readonly<Document> & DoseDto;

export const DoseSchema = new Schema(doseSchemaDefinition, {
  versionKey: false
});

export const DoseSchemaModel = {
  name: SchemaCollection.Dose,
  schema: DoseSchema
};
