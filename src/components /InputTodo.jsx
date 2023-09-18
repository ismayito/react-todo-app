import "../App.css"
import { useState } from 'react';
import { FaPlusCircle } from "react-icons/fa"


const InputTodo = ({ addTodoItem }) => {

  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(title.trim()){
      addTodoItem(title)
      setMessage('');
      setTitle('');
    }
    else {
      setMessage('Please add an item');
    }

    console.log(title);
   
  }

    return (
     <div>
      <form onSubmit={handleSubmit} className="form-container">
      <input 
        type="text" 
        value={title}
        onChange={handleChange}
        placeholder="Add Todo..." 
        className="input-text"
      />
      <button  className="input-submit" type='submit'>
       <FaPlusCircle
       style={{
        color: '#5e5e5e',
        fontSize: '20px',
        marginTop: '2px',
      }}
       />
      </button>
    </form>
    <span className="submit-warning">{message}</span>
    </div> 
    )
  };
  export default InputTodo;  