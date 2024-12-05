import { model, Schema } from "mongoose";

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    productImage: { type: String, required: true },
    price: { type: Number },
    discription: String,
    rating: Number,
    tags: [{ type: String }],
    sortDescription: { type: String, required: true },
    isDeleted: { type: Boolean },
    isPopular: { type: Boolean },
    isFeatured: { type: Boolean },
  },
  { timestamps: true }
);

export const Product = model("Product", productSchema);
