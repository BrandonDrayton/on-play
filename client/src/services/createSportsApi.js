import React from 'react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const createSportsApi = createApi({
  reducerPath: 'sportsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://site.api.espn.com/apis/site/v2/sports/' }),
  endpoints: (builder) => ({
    getTeams: builder.query({
      query: ({ sport, league }) => `${sport}/${league}/teams`,
    }),
    getTeam: builder.query({
      query: ({ sport, league, id }) => `${sport}/${league}/teams/${id}`,
    }),
    getSpecificTeam: builder.query({
      query: ({ sport, league, int }) => `${sport}/${league}/teams/${int}`,
    }),
  }),
})
export const { useGetTeamsQuery, useGetSpecificTeamQuery, useGetTeamQuery } = createSportsApi
