import { useDispatch } from 'react-redux';
import { toggleTodoCompleted } from '../../redux/todoSlice';

function ListItem(props) {
    const {id, text, completed } = props;
    const dispatch = useDispatch();
    
    const handleTodoCompleted = () => {
        dispatch(
            toggleTodoCompleted({id: id, completed: !completed})
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
            <button className="todo-list__delete-btn">
                <img src='img/del.svg' alt='delete'/>
            </button>
        </li>
    )
}

export default ListItem;