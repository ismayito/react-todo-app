import "../App.css"
import InputTodo from './InputTodo';
import TodosList from './TodosList';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";

function getInitialTodos() {
  // getting stored items
  const temp = localStorage.getItem('todos');
  const savedTodos = JSON.parse(temp);
  return savedTodos || [];
}

const TodosLogic = () => {
  const [todos, setTodos] = useState(
 getInitialTodos());

      const delTodo = (id) => {
        setTodos([
          ...todos.filter((todo) => {
            return todo.id !== id;
          }),
        ]);
      };

      useEffect(() => {
        // storing todos items
        const temp = JSON.stringify(todos);
        localStorage.setItem('todos', temp);
      }, [todos]);
      const addTodoItem = (title) => {
        const newTodo = {
          id: uuidv4() ,
          title: title,
          completed: false,
        };
        setTodos([...todos, newTodo]);
      };

      const setUpdate = (updatedTitle, id) => {
        setTodos(
          todos.map((todo) => {
            if (todo.id === id) {
              todo.title = updatedTitle;
            }
            return todo;
          })
        );
      };

    return (
        <div>
            <InputTodo addTodoItem={addTodoItem} />
            <TodosList todosProps={todos} setTodos={setTodos} setUpdate={setUpdate} delTodo={delTodo}/>
        </div>
    
  )}
  export default TodosLogic;
  