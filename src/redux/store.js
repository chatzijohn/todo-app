import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { api } from './api/todos'

export const makeStore = () => 
  configureStore({
    
  })