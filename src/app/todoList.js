// MUI Material List Dependancies
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoList({ todoArr }) {

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
        <List>
          {todoArr.length === 0 && <Typography variant="h6" >You have nothing to do.</Typography>}
          {todoArr.map(todo => {
          return(
              <ListItem 
              secondaryAction={
                  <IconButton edge="end" onClick={() => deleteTodo(todo.id)}>
                  <DeleteIcon />
                  </IconButton>
              }
              key={todo.id}
              disablePadding
              >
              <ListItemButton onClick={_ => toggleTodo(todo.id)}>                
                  <ListItemIcon>
                  <Checkbox
                      edge="start"
                      checked={todo.completed}
                      tabIndex={-1}
                      disableRipple
                  />
                  </ListItemIcon>
                  <ListItemText primary={todo.title} />
              </ListItemButton>
              </ListItem>
          )
          })}
        </List>
    )
} 