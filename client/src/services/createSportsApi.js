import React from 'react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const createSportsApi = createApi({
  reducerPath: 'sportsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://site.api.espn.com/apis/site/v2/sports/' }),
  endpoints: (builder) => ({
    getTeams: builder.query({
      query: ({ sport, league }) => `${sport}/${league}/teams`,
    }),
    getNews: builder.query({
      query: ({ sport, league }) => `${sport}/${league}/news`,
    }),
    getSpecificTeam: builder.query({
      query: ({ sport, league, int }) => `${sport}/${league}/teams/${int}`,
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
    getNbaTeams: builder.query({
      query: () => `basketball/nba/teams`,
    }),
  }),
})
export const { useGetTeamsQuery, useGetSpecificTeamQuery } = createSportsApi
