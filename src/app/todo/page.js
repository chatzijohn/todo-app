"use client"
import { useState } from "react";
import { Box } from "@mui/material";

import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import TodoCounter from "@/components/TodoCounter";

export default function Todo() {

  const [todoArr, setTodoArr] = useState([]);

  return (
    <> 
      <Box
        sx={{
          display: 'flex',
          height: "80vh",
          width: "100vw",
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TodoCounter todoArr={ todoArr } />
        <TodoForm todoArr={ todoArr } setTodoArr={setTodoArr} />
        <TodoList todoArr={ todoArr } setTodoArr={setTodoArr} />
      </Box>
    </>
  )
}
