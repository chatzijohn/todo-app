import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { todoApi } from './api/todoApi'
import { HYDRATE } from 'next-redux-wrapper'

const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    // Merge the server-rendered state with the client's state
    return {
      ...state, // Client-side state
      ...action.payload, // 
    }
  }
  // Define your root reducer here, combining reducers if necessary
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(todoApi.middleware),
})

setupListeners(store.dispatch)

const makeStore = () => store

export const wrapper = createWrapper(makeStore)

export default store