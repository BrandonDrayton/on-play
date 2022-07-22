import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const createUserApi = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/users' }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => '/current',
      providesTags: ['User'],
    }),
    getUserLogin: builder.query({
      query: () => '/login',
      providesTags: ['User'],
    }),
    getUserRegister: builder.query({
      query: () => '/register',
      providesTags: ['User'],
    }),
    getUserLogout: builder.query({
      query: () => '/logout',
      providesTags: ['User'],
    }),
    getUserFavorite: builder.query({
      query: () => '/favorite',
      providesTags: ['User'],
    }),
    addUserLogin: builder.mutation({
      query: (userLogin) => ({
        url: '/login',
        method: 'POST',
        body: userLogin,
      }),
      invalidatesTags: ['User'],
    }),
    addUserRegister: builder.mutation({
      query: (userRegister) => ({
        url: '/register',
        method: 'POST',
        body: userRegister,
      }),
      invalidatesTags: ['User'],
    }),
    addUserLogout: builder.mutation({
      query: (userLogout) => ({
        url: 'logout',
        method: 'POST',
        body: userLogout,
      }),
      invalidatesTags: ['User'],
    }),
    addUserFavorite: builder.mutation({
      query: (userFavorite) => ({
        url: '/favorite',
        method: 'POST',
        body: userFavorite,
      }),
      invalidatesTags: ['User'],
    }),
  }),
})

export const {
  useGetCurrentUserQuery,
  useGetUserLoginQuery,
  useGetUserRegisterQuery,
  useGetUserLogoutQuery,
  useGetUserFavoriteQuery,
  useAddUserLoginMutation,
  useAddUserRegisterMutation,
  useAddUserLogoutMutation,
  useAddUserFavoriteMutation,
} = createUserApi
