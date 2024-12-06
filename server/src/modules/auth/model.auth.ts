import { model, Model, Schema } from "mongoose";
import bcryptjs from "bcryptjs"
import config from "../../config";

const userSchema = new Schema(
  {
    fullName: String,
    profileImage:String,
    userName:String,
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
    },
    role:String,
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const user = this;

  user.password = await bcryptjs.hash(user.password, Number(config.salt_round));
  next();
});
userSchema.post("save", async function (doc, next) {
  doc.password = "";

  // user.password = await bcryptjs.hash(user.password, Number(config.salt_round));
  next();
});

export const User = model("User", userSchema);
