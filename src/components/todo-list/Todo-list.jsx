import './Todo-list.scss';
import ListItem from "../list-item/List-item";
import { useSelector } from 'react-redux';

function TodoList() {
    const todos = useSelector((state) => state.todos.todos);
    const filter = useSelector((state) => state.todos.filter);

    const changeFilter = () => {
      switch(filter) {
        case 'all' :
          return todos
        case 'active':
          return todos.filter(todo => todo.completed === false);
        case 'done':
          return todos.filter(todo => todo.completed === true);
        default:
          return todos
      }
    }
    
    return (
        <ul className="todo-list">
          {
            todos.length > 0 ? (
              changeFilter().map(todo => {
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