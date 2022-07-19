import {
  Prop,
  ModelOptions,
  getModelForClass,
  Severity,
} from '@typegoose/typegoose';
import { Schema } from 'mongoose';

export type ActorDocument = Actor & Document;

@ModelOptions({
  schemaOptions: { _id: false },
  options: { allowMixed: Severity.ALLOW },
})
export class Actor {
  @Prop({ type: String })
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

export const ActorModel = getModelForClass(Actor);
