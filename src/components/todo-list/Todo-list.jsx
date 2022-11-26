import './Todo-list.scss';
import ListItem from "../list-item/List-item";

function TodoList(props) {
    const {todos, toggleTodoComplete, deleteTodo} = props;
    return (
        <ul className="todo-list">
          {todos.map(todo => {
            return (
                <ListItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                    toggleTodoComplete={toggleTodoComplete}
                    deleteTodo={deleteTodo}
                />
            )
          })}
        </ul>
    )
}

export default TodoList;