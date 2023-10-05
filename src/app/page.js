"use client"
import { useState } from "react";
import { Box } from "@mui/material";

import TodoForm from "@/app/TodoForm";
import TodoList from "@/app/TodoList";
import TodoCounter from "@/app/TodoCounter";

export default function Home() {

  const [todoArr, setTodoArr] = useState([]);

  return (
    <> 
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <TodoCounter todoArr={ todoArr } />
        <TodoForm todoArr={ todoArr } setTodoArr={setTodoArr} />
        <TodoList todoArr={ todoArr } setTodoArr={setTodoArr} />
      </Box>
    </>
  )
}
