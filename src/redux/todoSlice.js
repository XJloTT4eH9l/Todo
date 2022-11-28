import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            if(action.payload.text) {
                const todo = {
                    id: new Date().toISOString(),
                    text: action.payload.text, 
                    completed: false
                };
                state.push(todo);
            }
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload.id);
        },
        toggleTodoCompleted: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload.id);
            todo.completed = !todo.completed;
        },
        clearCompletedTodo: (state, action) => {
            return state.filter(todo => todo.completed === false);
        },
        filterTodo: (state, action) => {
            switch(action.filter) {
                case 'all':
                  return state;
                case 'active':
                  return state.filter(item => item.completed === false);
                case 'done':
                  return state.filter(item => item.completed === true);
                default:
                  return state;
              }
        }
    }
});

export const { addTodo, deleteTodo, toggleTodoCompleted, clearCompletedTodo, filterTodo } = todoSlice.actions;
export default todoSlice.reducer;