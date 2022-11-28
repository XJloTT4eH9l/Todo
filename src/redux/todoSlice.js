import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: new Date().toISOString(),
                text: action.payload.text, 
                completed: false
            };
            state.push(todo);
        },
        toggleTodoCompleted: (state, action) => {
            const index = state.findIndex(todo => todo.id === action.payload.id);
            state[index].completed = action.payload.completed; 
        }
    }
});

export const { addTodo, toggleTodoCompleted } = todoSlice.actions;
export default todoSlice.reducer;