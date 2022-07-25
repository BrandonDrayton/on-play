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
      query: (id) => `/${id}`,
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
    addNewSubComment: builder.mutation({
      query: ({ threadId, commentId, newSubComment }) => ({
        url: `/${threadId}/comment/${commentId}`,
        method: 'POST',
        body: newSubComment,
      }),
      invalidatesTags: ['Thread'],
    }),
    addNewLike: builder.mutation({
      query: ({ threadId, commentId, newLike }) => ({
        url: `/${threadId}/comment/${commentId}/likes`,
        method: 'POST',
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
  useAddNewSubCommentMutation,
  useAddNewLikeMutation,
} = forumApi
