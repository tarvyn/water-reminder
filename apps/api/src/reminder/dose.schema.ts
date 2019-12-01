import { SchemaCollection } from '@api/shared/collections';
import { DoseDto } from '@water-reminder/api-interfaces';
import { Document, Schema, SchemaDefinition, SchemaTypes } from 'mongoose';

const createdAtBindingProperty: keyof DoseDto = 'time';

type DoseSchemaDefinitionKeys = keyof Omit<DoseDto, typeof createdAtBindingProperty | '_id'>;

const doseSchemaDefinition: Record<DoseSchemaDefinitionKeys, SchemaDefinition['']> = {
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
  timestamps: { createdAt: createdAtBindingProperty },
  versionKey: false
});

export const DoseSchemaModel = {
  name: SchemaCollection.Dose,
  schema: DoseSchema
};
