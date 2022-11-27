import './Footer.scss';

function Footer(props) {
    const {filter, filters, getActiveTodo, setFilter, clearCompletedTodo} = props;
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
                    onClick={() => setFilter(item)}
                  >
                    {item}
                  </li>
                )
              })
            }
          </ul>
          <span className="footer__clear" onClick={clearCompletedTodo}>Clear completed</span>
        </footer>
    )
}

export default Footer