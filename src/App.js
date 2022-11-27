import { useState, useEffect } from "react";
import Form from "./components/form/Form";
import TodoList from "./components/todo-list/Todo-list";
import Footer from "./components/footer/Footer";

function App() {
  const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem('todo-items')) || []);
  const [inputText, setInputText] = useState('');
  const [filter, setFilter] = useState('all');

  const filters = ['all', 'active', 'done'];

  useEffect(() => {
    localStorage.setItem('todo-items', JSON.stringify(todos));
  }, [todos])

  const addTodo = (e) => {
    e.preventDefault();
    const todo = {id: new Date().toISOString(), text: inputText, completed: false};
    setTodos(prev => [...prev, todo]);
    setInputText('');
  }

  const filterTodo = (todos) => {
    switch(filter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter(item => item.completed === false);
      case 'done':
        return todos.filter(item => item.completed === true);
      default:
        return todos;
    }
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

  const getActiveTodo = () => {
    return todos.filter(item => item.completed === false).length;
  }

  const clearCompletedTodo = () => {
    setTodos(todos.filter(item => item.completed !== true));
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
          filterTodo={filterTodo}
        />
        <Footer 
          filters={filters}
          filter={filter} 
          setFilter={setFilter} 
          getActiveTodo={getActiveTodo} 
          clearCompletedTodo={clearCompletedTodo} 
        />
      </div>
    </div>
  );
}

export default App;
