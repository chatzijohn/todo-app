import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

export const todoApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.1.135:5050/api' }),
  extractRehydrationInfo(action, {reducerPath}) {
    if (action.type === HYDRATE) {
        return action.payload[reducerPath]
    }
  },
  endpoints: (builder) => ({
    getAllTasks: builder.query({
      query: () => 'tasks',
    }),
  }),
})


// Export hooks for usage in functional components
export const {
  useGetAllTasksQuery,
} = todoApi

// export endpoints for use in SSR
export const { getAllTasks } = todoApi.endpoints