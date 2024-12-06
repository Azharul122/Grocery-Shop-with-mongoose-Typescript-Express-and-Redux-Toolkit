type Product = {
  _id: Key | null | undefined;
  productName: string;
  productImage?: string;
  price: number;
  discription?: string;
  rating?: number;
  tags?: string[];
  images: string[];
  sortDescription?: string;
  category?: string;
  categoryId?: string;
  stock?: number;
  isFresh?: boolean;
  isDeleted?: boolean;
  isPopular?: boolean;
  isFeatured?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

interface Category {
  categoryName: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export type { Product, Category };
