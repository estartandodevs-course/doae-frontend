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
    getDonationsSum: builder.query({
      query: () => `donation/sum`,
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
  useGetDonationsSumQuery,
  useCreateDonationMutation,
  useDeleteDonationMutation,
  useGetDonationsByInstitutionQuery,
  useGetDonationsByTargetQuery,
  useUpdateDonationMutation,
} = donationApi;
