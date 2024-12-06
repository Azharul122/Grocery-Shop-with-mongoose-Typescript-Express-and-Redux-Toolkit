import { z } from "zod";

const productValidateZod = z.object({
  productName: z.string(),
  productImage: z.string().optional(),
  price: z.number(),
  stock:z.number().optional().default(10),
  discription: z.string().optional(),
  rating: z.number().default(0).optional(),
  sortDescription: z.string().min(50, "At least 50 characters").optional(),
  isDeleted: z.boolean().optional().default(false),
  tags: z.array(z.string()).optional(),
  images: z.array(z.string()),
  categoryId:z.string().optional(),
  category:z.string().optional(),
  isFresh: z.boolean().optional().default(false),
  isPopular: z.boolean().optional().default(false),
  isFeatured: z.boolean().optional().default(false),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export const productValidation = {
  productValidateZod,
};



