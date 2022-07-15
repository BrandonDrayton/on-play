import React from 'react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const createSportsApi = createApi({
  reducerPath: 'sportsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://site.api.espn.com/apis/site/v2/' }),
  endpoints: (builder) => ({
    getTeams: builder.query({
      query: () => 'sports/football/nfl/teams',
    }),
  }),
})
export const { useGetTeamsQuery } = createSportsApi
