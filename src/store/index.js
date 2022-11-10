import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { donationApi } from './donation/donation.service';
import { institutionApi } from './institution/institution.service';
import { productApi } from './product/product.service';
import { publicationApi } from './publication/publication.service';
import { targetApi } from './target/target.service';

export const store = configureStore({
  reducer: {
    [donationApi.reducerPath]: donationApi.reducer,
    [institutionApi.reducerPath]: institutionApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [publicationApi.reducerPath]: publicationApi.reducer,
    [targetApi.reducerPath]: targetApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(donationApi.middleware)
      .concat(institutionApi.middleware)
      .concat(productApi.middleware)
      .concat(publicationApi.middleware)
      .concat(targetApi.middleware),
});

setupListeners(store.dispatch);
