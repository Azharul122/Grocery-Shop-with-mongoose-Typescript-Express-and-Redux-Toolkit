import { model, Schema } from "mongoose";

const categorySchema = new Schema(
  {
    id:String,
    categoryName: { type: String, required: true },
  },
  { timestamps: true }
);

export const Category = model("Category", categorySchema);



