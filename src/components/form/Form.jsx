import './Form.scss';
import {useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todoSlice';

function Form(props) {
    const {inputText, setInputText} = props;
    const dispatch = useDispatch();

    const onSubmit = (e) => {
      e.preventDefault();
      dispatch(
        addTodo({
          text: inputText
        })
      )
      setInputText('');
    }

    return(
        <form className="form">
          <input 
            className="form__input" 
            placeholder="...text" 
            value={inputText} 
            onChange={(e) => setInputText(e.target.value)}
          />
          <button className="form__submit" onClick={onSubmit}>Add todo</button>
        </form>
    )
}

export default Form;