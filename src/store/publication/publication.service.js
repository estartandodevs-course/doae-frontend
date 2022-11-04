import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import constants from '../../constants';

export const publicationApi = createApi({
  reducerPath: 'publicationApi',
  baseQuery: fetchBaseQuery({ baseUrl: constants.BASE_URL_API }),
  endpoints: builder => ({
    getPublicationsByInstitution: builder.query({
      query: id => `publication/institution/${id}`,
    }),
    getPublication: builder.query({
      query: () => `publication`,
    }),
    createPublication: builder.mutation({
      query: data => ({
        url: `publication`,
        method: 'POST',
        body: data,
      }),
    }),
    updatePublication: builder.mutation({
      query: data => ({
        url: `publication/${data.id}`,
        method: 'PUT',
        body: data,
      }),
    }),
    deletePublication: builder.mutation({
      query: id => ({
        url: `publication/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useCreatePublicationMutation,
  useDeletePublicationMutation,
  useGetPublicationQuery,
  useGetPublicationsByInstitutionQuery,
  useUpdatePublicationMutation,
} = publicationApi;
