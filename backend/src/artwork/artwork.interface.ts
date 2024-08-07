import { Document } from 'mongoose';

export interface Artwork extends Document {
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly clientLink: string;
  readonly status: 'hidden' | 'displayed';
}
