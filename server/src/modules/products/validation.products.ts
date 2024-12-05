import { z } from "zod";

const productValidateZod = z.object({
  title: z.string(),
  productImage: z.string(),
  price: z.number(),
  discription: z.string().optional(),
  rating: z.number().default(0),
  sortDescription: z.string().min(50, "At least 50 characters"),
  isDeleted: z.boolean().optional().default(false),
  tags: z.array(z.string()).optional(), 
  isPopular: z.boolean().optional().default(false),
  isFeatured: z.boolean().optional().default(false),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});


export const productValidation={
    productValidateZod
}