function ListItem(props) {
    const {id, text, completed, toggleTodoComplete, deleteTodo} = props;
    return (
        <li className='todo-list__item'>
            <span 
            className={completed ? 'todo-list__text todo-list__text--completed' : 'todo-list__text'}
            onClick={() => toggleTodoComplete(id)}
            >
                {text}
            </span>
            <button className="todo-list__delete-btn" onClick={() => deleteTodo(id)}>
                <img src='img/del.svg' alt='delete'/>
            </button>
        </li>
    )
}

export default ListItem;