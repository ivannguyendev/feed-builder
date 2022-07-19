import {
  Prop,
  ModelOptions,
  getModelForClass,
  Severity,
} from '@typegoose/typegoose';
import { Schema } from 'mongoose';

export type UserDocument = User & Document;

@ModelOptions({
  schemaOptions: { _id: true },
  options: { allowMixed: Severity.ALLOW },
})
export class User {
  _id?: string;
  @Prop({ type: String })
  name?: string;
  @Prop({ type: () => Schema.Types.Mixed, default: {} })
  avatar?: Record<string, any>;
  @Prop({ type: String })
  gender?: string;
  @Prop()
  dob?: string;
}

export const UserModel = getModelForClass(User);
