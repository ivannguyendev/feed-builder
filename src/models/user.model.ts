import { Prop, ModelOptions, getModelForClass } from '@typegoose/typegoose';

export type UserDocument = User & Document;

@ModelOptions({ schemaOptions: { _id: false } })
export class User {
  _id?: string;
  @Prop({ type: String })
  name?: string;
  @Prop({ type: String })
  avatar?: string;
  @Prop({ type: String })
  gender?: string;
  @Prop()
  dob?: string;
}

export const UserModel = getModelForClass(User);
