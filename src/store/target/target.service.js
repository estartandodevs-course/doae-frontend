import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import constants from '../../constants';

export const targetApi = createApi({
  reducerPath: 'targetApi',
  baseQuery: fetchBaseQuery({ baseUrl: constants.BASE_URL_API }),
  endpoints: builder => ({
    getTargets: builder.query({
      query: () => `target`,
    }),
    getTarget: builder.query({
      query: id => `target/${id}`,
    }),
    getTargetsByIntitution: builder.query({
      query: id => `target/institution/${id}`,
    }),
    createTarget: builder.mutation({
      query: data => ({
        url: `target`,
        method: 'POST',
        body: data,
      }),
    }),
    updateTarget: builder.mutation({
      query: data => ({
        url: `target/${data.id}`,
        method: 'PUT',
        body: data,
      }),
    }),
    updateTargetQuantity: builder.mutation({
      query: data => ({
        url: `target/quantity/${data.id}`,
        method: 'PUT',
        body: data,
      }),
    }),
    deleteTarget: builder.mutation({
      query: id => ({
        url: `target/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetTargetsQuery,
  useGetTargetQuery,
  useGetTargetsByIntitutionQuery,
  useDeleteTargetMutation,
  useUpdateTargetMutation,
  useUpdateTargetQuantityMutation,
  useCreateTargetMutation,
} = targetApi;
