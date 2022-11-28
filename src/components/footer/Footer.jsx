import './Footer.scss';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCompletedTodo, filterTodo } from '../../redux/todoSlice'

function Footer() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [filter, setFilter] = useState('all');
    const filters = ['all', 'active', 'done'];

    const getActiveTodo = () => {
      return todos.filter(todo => todo.completed === false).length;
    }
    const clearCompletedTodosHandler = () => {
      dispatch(clearCompletedTodo());
    }
    const filterHandler = (item) => {
      setFilter(item);
      dispatch(filterTodo({filter}));
    }
    return (
        <footer className="footer">
          <span className="footer__counter">{getActiveTodo()} items to do</span>
          <ul className="footer__filters">
            {
              filters.map(item => {
                const isActive = item === filter;
                return (
                  <li
                    key={item} 
                    className={isActive ? "footer__item footer__item--active" : "footer__item"}
                    onClick={() => filterHandler(item)}
                  >
                    {item}
                  </li>
                )
              })
            }
          </ul>
          <span className="footer__clear" onClick={clearCompletedTodosHandler}>Clear completed</span>
        </footer>
    )
}

export default Footer