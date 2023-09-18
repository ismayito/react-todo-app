import "../App.css";
import { useState } from 'react';
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";


const TodoItem = ({ itemProp,setTodos,delTodo,setUpdate }) => {

  const [editing, setEditing] = useState(false);
  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  // ...
  
  const handleChange = (id) => {
    setTodos((prevState) =>
    prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    })
  );
  };

  // ...
  const handleEditing = () => {
    setEditing(true);
  };
  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };
 
    return <li className='item'>
      <div className="content" style={viewMode}>
       <input type="checkbox"
        checked={itemProp.completed}
        className='textInput'
        onChange={() => handleChange(itemProp.id)}
       />
       <button  onClick={handleEditing}>
        <AiFillEdit
        style={{
          color: '#5e5e5e',
          fontSize: '20px',
          marginTop: '2px',
        }}/>
       </button>
        <button onClick={() => delTodo(itemProp.id)}>
          <FaTrash
          style={{
            color: '#5e5e5e',
            fontSize: '20px',
            marginTop: '2px',
          }}
          />
        </button>
      {itemProp.title}
      </div>
      <input
      type="text"
      value={itemProp.title}
      className='textInput'
      style={editMode}
      onChange={(e) => setUpdate(e.target.value, itemProp.id)}
      onKeyDown={handleUpdatedDone}
    />
      </li>;
  };
  export default TodoItem;
  