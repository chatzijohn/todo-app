"use client"
import { TextField, Button, Typography, Box, Grid } from "@mui/material";
import styles from '@/todoForm.module.scss'
import { Controller , useForm } from "react-hook-form"
import { useState } from "react";
import todoList from './todoList';



export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
    reset,
  } = useForm({ mode: "onChange" });

  const [todoArr, setTodoArr] = useState([]);

  const onSubmit = (todoTask) => {
   setTodoArr([...todoArr, {id: crypto.randomUUID(),title: todoTask.todoTask ,completed: false}])
    // console.log("TodoTask:",todoTask)
    // console.log("TodoArr:",[...todoArr, {id: crypto.randomUUID(), title: todoTask.todoTask, completed: false}])
    reset()
  }

  const deleteTodo = (id) => {
    const newTodoArr = todoArr.filter(todo => {return todo.id != id})
    setTodoArr(newTodoArr)
  }

  const toggleTodo = (id) => {
    const newTodoArr = todoArr.map(todo => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed}
      }
      return todo
    })
    setTodoArr(newTodoArr)
  }

  return (
     <div className={styles.main}>
      <div className={styles.todo}>
            <Grid container >
              <form 
                onSubmit={handleSubmit(onSubmit)}
              >
                <TextField 
                  {...register("todoTask", {required: true, minLength: 2, maxLength: 30})}
                  id="standard-basic" 
                  label="New Todo Task" 
                  variant="outlined"
                />
                <Button
                  disabled={!isDirty || !isValid}
                  color="primary"
                  variant="contained"
                  type="submit"
                  sx={{ height: "100%" }}
                  >+</Button>
              </form>
            </Grid>
           <todoList />
        </div>
     </div>
  )
}
