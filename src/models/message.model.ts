import {
  Prop,
  ModelOptions,
  getModelForClass,
  Severity,
} from '@typegoose/typegoose';
import mongoose, { Schema } from 'mongoose';
import { Button } from './button.model';
import { Content } from './content.model';
import { Platform } from './platform.model';
import { User } from './user.model';

export type MessageDocument = Message & Document;

@ModelOptions({
  schemaOptions: { _id: false, timestamps: true },
  options: { allowMixed: Severity.ALLOW },
})
export class Message {
  @Prop({ type: String, default: () => String(new mongoose.Types.ObjectId()) })
  _id?: string;
  @Prop({ type: String, required: true })
  userId: string;
  @Prop({ required: true })
  user: User;
  @Prop({ type: String, enum: ['read', 'unread'], default: 'unread' })
  state: 'unread' | 'read';
  @Prop({ required: true })
  collapse: string;
  @Prop({ required: true })
  contents: Content;
  @Prop({ required: true })
  headings: Content;
  @Prop()
  subtitle: Content;
  @Prop()
  template: string;
  @Prop({ type: () => Schema.Types.Mixed, default: {} })
  data: Record<string, any>;
  @Prop()
  url: Platform;
  @Prop()
  image: Platform;
  @Prop()
  buttons: Button[] | Button[][];
  @Prop()
  sound: Platform;
  @Prop({ type: () => [String] })
  tags: string[];
  @Prop({ type: Number, default: Date.now })
  createdAt: number;
}
export const MessageModel = getModelForClass(Message);
