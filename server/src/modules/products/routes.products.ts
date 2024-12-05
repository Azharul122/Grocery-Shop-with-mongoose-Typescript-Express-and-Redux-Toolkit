import express from "express";
import { productControllers } from "./controllers.products";
const router = express.Router();

router.post("/create-product", productControllers.createProduct);
router.patch("/update-product/:productId", productControllers.updateProduct);
router.delete("/delete-product/:productId", productControllers.deleteProduct);
router.get("/retrive-product", productControllers.getAllProduct);
router.get("/retrive-single-product/:productId", productControllers.getSingleProduct);

export const productRouts = router;
