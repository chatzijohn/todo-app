"use client"
import { useState } from "react";
import TodoForm from "@/app/TodoForm";
import TodoList from "@/app/TodoList";
import { Grid } from "@mui/material";
// import { Grid } from "@mui/material";
// import styles from '@/todoForm.module.scss'


export default function Home() {

  const [todoArr, setTodoArr] = useState([]);

  return (
   <Grid
      direction="column"
      alignItems="center"
      container
   >
      <TodoForm todoArr={ todoArr } setTodoArr={setTodoArr} />
      <TodoList todoArr={ todoArr } setTodoArr={setTodoArr} />
   </Grid>
  )
}
