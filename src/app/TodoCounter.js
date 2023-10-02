import { Typography, Grid } from "@mui/material"

export default function TodoCounter({ todoArr}) {

    const todoCompletedCount = todoArr.filter(todo => todo.completed == true).length
    const todoTotalCount = todoArr.length
    return (
        <Grid
            gap={1}
            container
        >
            <Typography>
                Total Tasks: {todoTotalCount}
            </Typography>

            <Typography color={"#1a69e8"}>
                Completed Tasks: {todoCompletedCount}
            </Typography>
        </ Grid>
        )
    
}
