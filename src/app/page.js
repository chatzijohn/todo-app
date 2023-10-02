"use client"
import { useState } from "react";
import { Grid } from "@mui/material";
import TodoForm from "@/app/TodoForm";
import TodoList from "@/app/TodoList";
import TodoCounter from "@/app/TodoCounter";

export default function Home() {

  const [todoArr, setTodoArr] = useState([]);

  return (
    <>
      <Grid
        direction="column"
        alignItems="center"
        container
      >
        <TodoCounter todoArr={ todoArr } setTodoArr={setTodoArr} />
        <TodoForm todoArr={ todoArr } setTodoArr={setTodoArr} />
        <TodoList todoArr={ todoArr } setTodoArr={setTodoArr} />
      </Grid>
    </>
  )
}
