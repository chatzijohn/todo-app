import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { todoApi } from './api/todos'

export const makeStore = () => 
  configureStore({
    reducer: {
      [todoApi.reducerPath]: todoApi.reducer,
    },
    middleware: (gDM) => gDM().concat(todoApi.middleware)
  })