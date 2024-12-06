import { model, Schema } from "mongoose";

const productSchema = new Schema(
  {
    productName: { type: String, required: true },
    productImage: String,
    price: { type: Number, required: true },
    description: String,
    stock:Number,
    rating: Number,
    images: [{ type: String, required: true }], 
    tags: [{ type: String }],
    sortDescription: { type: String, required: true },
    category:String,
    categoryId:String,
    isFresh: { type: Boolean },
    isDeleted: { type: Boolean },
    isPopular: { type: Boolean },
    isFeatured: { type: Boolean },
  },
  { timestamps: true }
);

export const Product = model("Product", productSchema);



// "productName": "Banana",
// "description": "Bananas are elongated, yellow fruits with a sweet, creamy flesh, commonly eaten fresh or used in smoothies, desserts, and baked goods. They are rich in nutrients like potassium, vitamin C, and dietary fiber, making them a popular and healthy snack worldwide.",
// "price": 20.99,
// "stock": 50,
// "images": [
//     "https://ibb.co.com/3ps2stJ"
// ],
// "categoryId": "6751516f9c52879c1fde6558",