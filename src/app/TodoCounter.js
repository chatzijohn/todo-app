import { Grid, Typography } from "@mui/material"

export default function TodoCounter({ todoArr}) {

    const todoCompletedCount = todoArr.filter(todo => todo.completed == true).length
    const todoTotalCount = todoArr.length
    return (
        <Grid 
            sx={{ gap: 1 }}
            container
        >
            <Typography>
                Total Tasks: {todoTotalCount}
            </Typography>
            <Typography>
                Completed Tasks: {todoCompletedCount}
            </Typography>
        </Grid>
        )
    
}
