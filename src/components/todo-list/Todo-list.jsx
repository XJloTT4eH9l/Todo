import './Todo-list.scss';
import ListItem from "../list-item/List-item";

function TodoList(props) {
    const {todos, toggleTodoComplete, deleteTodo, filterTodo} = props;
    return (
        <ul className="todo-list">
          {
            todos.length > 0 ? (
              filterTodo(todos).map(todo => {
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
              })
            ) : (
              <h2 className='todo-list__title'>Add your new todo</h2>
            )
          }
        </ul>
    )
}

export default TodoList;