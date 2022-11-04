import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import constants from '../../constants';

export const institutionApi = createApi({
  reducerPath: 'institutionApi',
  baseQuery: fetchBaseQuery({ baseUrl: constants.BASE_URL_API }),
  endpoints: builder => ({
    getInstitutions: builder.query({
      query: () => `institution`,
    }),
    getInstitution: builder.query({
      query: id => `institution/${id}`,
    }),
    createInstitution: builder.mutation({
      query: data => ({
        url: `institution`,
        method: 'POST',
        body: data,
      }),
    }),
    updateInstitution: builder.mutation({
      query: data => ({
        url: `institution/${data.id}`,
        method: 'PUT',
        body: data,
      }),
    }),
    deleteInstitution: builder.mutation({
      query: id => ({
        url: `institution/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useCreateInstitutionMutation,
  useDeleteInstitutionMutation,
  useGetInstitutionQuery,
  useGetInstitutionsQuery,
  useUpdateInstitutionMutation,
} = institutionApi;
