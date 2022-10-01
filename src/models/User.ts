import mongoose from "mongoose";
import { UserInfo } from "../interfaces/user/UserInfo";

const UserSchema = new mongoose.Schema({
  nickname: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  emotion_arr: {
    type: Array,
  },
  isAlreadyUser: {
    type: Boolean,
  },
  fcm_token: {
    type: [String],
    unique: true,
  },
  accessToken: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
  },
  age_range: {
    type: String,
  },
});

export default mongoose.model<UserInfo & mongoose.Document>("User", UserSchema);
