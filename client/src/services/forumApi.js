import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const forumApi = createApi({
  reducerPath: 'forum',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/threads' }),
  tagTypes: ['Thread'],
  endpoints: (builder) => ({
    getThreads: builder.query({
      query: () => '/all',
      providesTags: ['Thread'],
    }),
    getUserThreads: builder.query({
      query: () => '/user',
      providesTags: ['Thread'],
    }),
  }),
})

export const { useGetThreadsQuery, useGetUserThreadsQuery } = forumApi
