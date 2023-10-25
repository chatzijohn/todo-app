import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.1.135:5050' }),
  extractRehydrationInfo(action, {reducerPath}) {
    if (action.type === HYDRATE) {
        return action.payload[reducerPath]
    }
  },
  endpoints: (builder) => ({
    getAllTasks: builder.query({
      query: () => '/api/tasks',
    }),
  }),
})

export const { useGetAllTasksQuerry } = api