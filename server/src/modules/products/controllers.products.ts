import { Request, Response } from "express";
import catchError from "../../utils/catchError";
import { productServices } from "./services.products";

const createProduct = catchError(async (req: Request, res: Response) => {
  const product = req.body;
  const data = await productServices.createProduct(product);

  res.status(201).json({
    success: true,
    message: "Created Success",
    data,
  });
});

const getAllProduct = catchError(async (req: Request, res: Response) => {
  const result = await productServices.products();
  res.status(201).json({
    success: true,
    message: "Fatch Success",
    data: result,
  });
});
const getSingleProduct = catchError(async (req: Request, res: Response) => {
  const { productId } = req.params;
  const result = await productServices.singleProduct(productId);
  res.status(201).json({
    success: true,
    message: "Single product fatch Success",
    data: result,
  });
});

const updateProduct = catchError(async (req: Request, res: Response) => {
  const { productId } = req.params;
  const product = req.body;

  const result = await productServices.updateProducts(productId, product);
  res.status(200).json({
    success: true,
    message: "Product updated",
    data: result,
  });
});

const deleteProduct = catchError(async (req: Request, res: Response) => {
  const { productId } = req.params;
  const result = await productServices.deleteProduct(productId);

  res.status(200).json({
    success: true,
    message: "Product deleted ",
    data: result,
  });
});

export const productControllers = {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProduct,
  getSingleProduct,
};
