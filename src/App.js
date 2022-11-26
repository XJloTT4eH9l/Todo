import { useState } from "react";
import Form from "./components/form/Form";
import TodoList from "./components/todo-list/Todo-list";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    const todo = {id: new Date().toISOString(), text: inputText, completed: false};
    setTodos(prev => [...prev, todo]);
    setInputText('');
  }

  const toggleTodoComplete = (id) => {
    setTodos(todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo
    }))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="app">
      <div className="todo">
        <h1 className="todo__title">Todo</h1>
        <Form 
          inputText={inputText}
          setInputText={setInputText} 
          addTodo={addTodo}
        />
        <TodoList
          todos={todos}
          toggleTodoComplete={toggleTodoComplete}
          deleteTodo={deleteTodo} 
        />
      </div>
    </div>
  );
}

export default App;
