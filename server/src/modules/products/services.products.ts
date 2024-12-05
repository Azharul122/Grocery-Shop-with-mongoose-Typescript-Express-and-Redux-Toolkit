import { productInterface } from "./interface.products";
import { Product } from "./model.products";
import { productValidation } from "./validation.products";

const createProduct = async (payload: productInterface) => {
  const validateProduct = productValidation.productValidateZod.parse(payload);
  const product = await Product.create(validateProduct);
  return product;
};

const singleProduct = async (productId: string) => {
  const findDeletedProduct = await Product.findById({ _id: productId });
  if (findDeletedProduct?.isDeleted) {
    throw new Error("This product already deleted");
  }
  const product = await Product.findById({ _id: productId });
  return product;
};

const products = async () => {
  const productsData = await Product.find({ isDeleted: false });
  return productsData;
};

const updateProducts = async (productId: string, product: productInterface) => {
  const findDeletedProduct = await Product.findById({ _id: productId });
  if (findDeletedProduct?.isDeleted) {
    throw new Error("This product already deleted");
  }
  const updatedProduct = await Product.findByIdAndUpdate(productId, product, {
    new: true,
  });
  return updatedProduct;
};

const deleteProduct = async (productId: string) => {
  const findDeletedProduct = await Product.findById({ _id: productId });
  if (findDeletedProduct?.isDeleted) {
    throw new Error("This product already deleted");
  }
  const targatedProduct = await Product.findOne({ _id: productId });
  if (!targatedProduct) {
    throw new Error("Product not found");
  }

  targatedProduct.isDeleted = true;
  targatedProduct.save();

  return targatedProduct;
};

export const productServices = {
  createProduct,
  singleProduct,
  products,
  updateProducts,
  deleteProduct,
};
