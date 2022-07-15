import React from 'react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const createSportsApi = createApi({
  reducerPath: 'sportsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://site.api.espn.com/apis/site/v2/sports/' }),
  endpoints: (builder) => ({
    getNflTeams: builder.query({
      query: () => `football/nfl/teams`,
    }),
    getMlbTeams: builder.query({
      query: () => `baseball/mlb/teams`,
    }),
    getNhlTeams: builder.query({
      query: () => `hockey/nhl/teams`,
    }),
    getMlsTeams: builder.query({
      query: () => `soccer/mls/teams`,
    }),
    //   getPgaTeams: builder.query({
    //     query: () => `golf/leagues/pga/playe`,
    //   }),
    getNbaTeams: builder.query({
      query: () => `basketball/nba/teams`,
    }),
  }),
})
export const {
  useGetNflTeamsQuery,
  useGetMlbTeamsQuery,
  useGetNhlTeamsQuery,
  useGetMlsTeamsQuery,
  useGetNbaTeamsQuery,
} = createSportsApi
