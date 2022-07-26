import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { forumApi } from '../services/forumApi'
import { createSportsApi } from '../services/createSportsApi'
import { createNewsApi } from '../services/createNewsApi'
import { createUserApi } from '../services/createUserApi'

export const store = configureStore({
  reducer: {
    [createSportsApi.reducerPath]: createSportsApi.reducer,
    [createNewsApi.reducerPath]: createNewsApi.reducer,
    [forumApi.reducerPath]: forumApi.reducer,
    [createUserApi.reducerPath]: createUserApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      forumApi.middleware,
      createUserApi.middleware,
      createNewsApi.middleware,
      createSportsApi.middleware,
    ]),
})
setupListeners(store.dispatch)
