// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

// @Schema()
// export class User extends Document {
//   @Prop({ type: Number })
//   id: number;

//   @Prop({ type: String, required: true, unique: true })
//   email: string;

//   @Prop({ type: String, required: true })
//   first_name: string;

//   @Prop({ type: String, required: true })
//   last_name: string;

//   @Prop({ type: String })
//   avatar: string;
// }

// export type UserDocument = User & Document;

// export const UserSchema = SchemaFactory.createForClass(User);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ type: String, required: true })
  name: number;

  @Prop({ type: String, required: true, unique: true })
  email: string;

  @Prop({ type: String, required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
