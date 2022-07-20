import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import React from 'react'

export const createNewsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/news' }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: ({ search }) => `?search=${search}`,
    }),
  }),
})

export const { useGetNewsQuery } = createNewsApi
