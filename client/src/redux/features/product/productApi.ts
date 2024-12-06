

import { Product } from '../../../types';
import { baseApi } from '../../api/baseApi';


export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchProducts: builder.query<Product[], void>({
      query: () => '/product/retrive-product',
      providesTags: ['product'],
    }),

   


    createProduct: builder.mutation<Product, Product>({
      query: (product) => ({
        url: '/product/create-product',
        method: 'POST',
        body: product,
      }),
      // Invalidates the 'Product' tag when a product is created
      invalidatesTags: ['product'],
    }),
    updateProduct: builder.mutation<Product, Product>({
      query: (product) => ({
        url: `/product/update-product/${product.id}`,
        method: 'PATCH',
        body: product,
      }),
      invalidatesTags: ['product'],
    }),
    deleteProduct: builder.mutation<void, string>({
      query: (id) => ({
        url: `/product/delete-product/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['product'],
    }),
  }),
});

export const {
  useFetchProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
