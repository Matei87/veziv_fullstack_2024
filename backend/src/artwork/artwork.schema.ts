import { Schema } from 'mongoose';

export const ArtworkSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  clientLink: { type: String, required: true },
  status: { type: String, enum: ['hidden', 'displayed'], required: true },
});
