import { useDispatch } from 'react-redux';
import { toggleTodoCompleted, deleteTodo } from '../../redux/todoSlice';
import { memo } from 'react';

function ListItem(props) {
    const {id, text, completed } = props;
    const dispatch = useDispatch();
    console.log('render');
    
    const handleTodoCompleted = () => {
        dispatch(
            toggleTodoCompleted({id})
        )
    }

    const handleDeleteTodo = () => {
        dispatch(
            deleteTodo({id})
        )
    }
    
    return (
        <li className='todo-list__item'>
            <span 
            className={completed ? 'todo-list__text todo-list__text--completed' : 'todo-list__text'}
            onClick={handleTodoCompleted}
            >
                {text}
            </span>
            <button className="todo-list__delete-btn" onClick={handleDeleteTodo}>
                <img src='img/del.svg' alt='delete'/>
            </button>
        </li>
    )
}

export default memo(ListItem);