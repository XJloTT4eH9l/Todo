import './Todo-list.scss';
import ListItem from "../list-item/List-item";
import { useSelector } from 'react-redux';

function TodoList(props) {
    const todos = useSelector((state) => state.todos);
    
    return (
        <ul className="todo-list">
          {
            todos.length > 0 ? (
              todos.map(todo => {
                return (
                    <ListItem
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        completed={todo.completed}
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