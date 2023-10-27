import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todoApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.1.135:5050/api' }),
  endpoints: (builder) => ({
    getAllTasks: builder.query({
      query: () => 'tasks',
    }),

    // Add a new todo
    addTodo: builder.mutation({
      query: (newTodo) => ({
        url: 'tasks', // Adjust the URL as per your API
        method: 'POST',
        body: newTodo,
      }),
    }),

    // Delete a todo
    deleteTodo: builder.mutation({
      query: (todoId) => ({
        url: `tasks/${todoId}`,
        method: 'DELETE',
      }),
    }),

    // Update a todo
    renameTodo: builder.mutation({
      query: ({ todoId, newTitle }) => ({
        url: `tasks/${todoId}`,
        method: 'PUT',
        body: { title: newTitle },
      }),
    }),
  }),
})

export const {
  useGetAllTasksQuery,
  useAddTodoMutation,
  useToggleTodoMutation,
  useDeleteTodoMutation,
  useRenameTodoMutation,
} = todoApi

export default todoApi
