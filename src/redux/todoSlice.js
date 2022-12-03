import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: localStorage.getItem('todos') !== null ? JSON.parse(localStorage.getItem('todos')) : [],
        filter: 'all'
    },
    reducers: {
        addTodo: (state, action) => {
            if(action.payload.text) {
                const todo = {
                    id: new Date().toISOString(),
                    text: action.payload.text, 
                    completed: false
                };
                state.todos.push(todo);
                localStorage.setItem('todos', JSON.stringify(state.todos));
            }
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        toggleTodoCompleted: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            todo.completed = !todo.completed;
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        clearCompletedTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.completed === false);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        changeFilter: (state, action) => {
            state.filter = action.payload.filter;
        }
    }
});

export const { addTodo, deleteTodo, toggleTodoCompleted, clearCompletedTodo, changeFilter } = todoSlice.actions;
export default todoSlice.reducer;