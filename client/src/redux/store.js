import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { createSportsApi } from '../services/createSportsApi'

export const store = configureStore({
  reducer: {
    [createSportsApi.reducerPath]: createSportsApi.reducer,
  },
})
setupListeners(store.dispatch)
