import { useState } from "react";
import Form from "./components/form/Form";
import TodoList from "./components/todo-list/Todo-list";
import Footer from "./components/footer/Footer";

function App() {
  const [inputText, setInputText] = useState('');
  
  return (
    <div className="app">
      <div className="todo">
        <h1 className="todo__title">Todo</h1>
        <Form 
          inputText={inputText}
          setInputText={setInputText} 
        />
        <TodoList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
