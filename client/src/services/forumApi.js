import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const forumApi = createApi({
  reducerPath: 'forum',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/threads' }),
  tagTypes: ['Threads', 'Thread'],
  endpoints: (builder) => ({
    getThreads: builder.query({
      query: () => '/all',
      providesTags: ['Threads'],
    }),
    getUserThreads: builder.query({
      query: () => '/user',
      providesTags: ['Threads'],
    }),
    getThread: builder.query({
      query: (id) => `/${id}/comment`,
      providesTags: ['Thread'],
    }),
    addNewThread: builder.mutation({
      query: (newThread) => ({
        url: '',
        method: 'POST',
        body: newThread,
      }),
      invalidatesTags: ['Thread'],
    }),
    addNewComment: builder.mutation({
      query: ({ id, newComment }) => ({
        url: `/${id}/comment`,
        method: 'POST',
        body: newComment,
      }),
      invalidatesTags: ['Thread'],
    }),
  }),
})

export const {
  useGetThreadsQuery,
  useGetUserThreadsQuery,
  useGetThreadQuery,
  useAddNewThreadMutation,
  useLazyGetThreadsQuery,
  useLazyGetUserThreadsQuery,
  useAddNewCommentMutation,
} = forumApi
