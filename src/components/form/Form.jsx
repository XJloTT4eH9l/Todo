import './Form.scss';

function Form(props) {
    const {inputText, addTodo, setInputText} = props;
    return(
        <form className="form">
          <input 
            className="form__input" 
            placeholder="...text" 
            value={inputText} 
            onChange={(e) => setInputText(e.target.value)}
          />
          <button className="form__submit" onClick={addTodo}>Add todo</button>
        </form>
    )
}

export default Form;