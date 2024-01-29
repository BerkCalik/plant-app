import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL} from '../constants';
import {IQuestion} from '../types/question';

export const questionApi = createApi({
  reducerPath: 'questionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: builder => ({
    getQuestions: builder.query<IQuestion[], void>({
      query: () => 'getQuestions',
    }),
  }),
});

export const {useGetQuestionsQuery} = questionApi;
