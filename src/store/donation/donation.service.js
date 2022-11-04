import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import constants from '../../constants';

export const donationApi = createApi({
  reducerPath: 'donationApi',
  baseQuery: fetchBaseQuery({ baseUrl: constants.BASE_URL_API }),
  endpoints: builder => ({
    getDonationsByInstitution: builder.query({
      query: id => `donation/institution/${id}`,
    }),
    getDonationsByTarget: builder.query({
      query: id => `donation/meta/${id}`,
    }),
    createDonation: builder.mutation({
      query: data => ({
        url: `donation`,
        method: 'POST',
        body: data,
      }),
    }),
    updateDonation: builder.mutation({
      query: data => ({
        url: `donation/${data.id}`,
        method: 'PUT',
        body: data,
      }),
    }),
    deleteDonation: builder.mutation({
      query: id => ({
        url: `donation/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useCreateDonationMutation,
  useDeleteDonationMutation,
  useGetDonationsByInstitutionQuery,
  useGetDonationsByTargetQuery,
  useUpdateDonationMutation,
} = donationApi;
