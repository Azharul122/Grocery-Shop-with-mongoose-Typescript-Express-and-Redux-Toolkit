export interface productInterface {
  productName: string;
  productImage?: string;
  price: number;
  discription?: number;
  rating?: number;
  tags?:string[],
  images:string[],
  sortDescription?: string;
  category?:string,
  categoryId?:string,
  stock?:number,
  isFresh?:boolean;
  isDeleted?: boolean;
  isPopular?: boolean;
  isFeatured?: boolean;
  createdAt?:Date,
  updatedAt?:Date
}


