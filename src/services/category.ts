import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ICategoryListResponse} from '../types/category';
import {API_URL} from '../constants';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: builder => ({
    getCategories: builder.query<ICategoryListResponse, void>({
      query: () => 'getCategories',
    }),
  }),
});

export const {useGetCategoriesQuery} = categoryApi;
