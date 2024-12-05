export interface productInterface {
  title: string;
  productImage: string;
  price: number;
  discription?: number;
  rating?: number;
  tags?:string[],
  sortDescription: string;
  isDeleted?: boolean;
  isPopular?: boolean;
  isFeatured?: boolean;
  createdAt?:Date,
  updatedAt?:Date
}
