import { DirectionsBusFilled } from "@mui/icons-material"
import { createSlice } from "@reduxjs/toolkit"

const todoSlice = createSlice({
    name: `todoSlice`,
    initialState: {
        data: null,
    },

    reducers: {
        setTodoData: (state, action) => {
            state.data = action.payload
        },
    },
})

export const { setTodoData } = todoSlice.actions

export default todoSlice.reducer