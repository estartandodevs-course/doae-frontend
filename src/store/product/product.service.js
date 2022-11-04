import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import constants from '../../constants';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: constants.BASE_URL_API }),
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => `product`,
    }),
    getProductsByTarget: builder.query({
      query: id => `product/meta/${id}`,
    }),
    getProduct: builder.query({
      query: id => `product/${id}`,
    }),
    createProduct: builder.mutation({
      query: data => ({
        url: `product`,
        method: 'POST',
        body: data,
      }),
    }),
    updateProduct: builder.mutation({
      query: data => ({
        url: `product/${data.id}`,
        method: 'PUT',
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: id => ({
        url: `product/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetProductQuery,
  useGetProductsByTargetQuery,
  useGetProductsQuery,
  useUpdateProductMutation,
} = productApi;
