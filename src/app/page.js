"use client"
import { useState } from "react";
import { Box } from "@mui/material";

import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import TodoCounter from "@/components/TodoCounter";

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
