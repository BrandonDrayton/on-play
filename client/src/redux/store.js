import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { forumApi } from '../services/forumApi'
import { createSportsApi } from '../services/createSportsApi'
import { createNewsApi } from '../services/createNewsApi'

export const store = configureStore({
  reducer: {
    [createSportsApi.reducerPath]: createSportsApi.reducer,
    [createNewsApi.reducerPath]: createNewsApi.reducer,
    [forumApi.reducerPath]: forumApi.reducer,
  },
})
setupListeners(store.dispatch)
