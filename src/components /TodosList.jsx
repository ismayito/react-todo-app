import TodoItem from './TodoItem';
const TodosList = (props) => {
    const {todosProps,setTodos ,delTodo, setUpdate={setUpdate}
  } = props;
    return (
      <ul>
        {todosProps.map(todo =>(
          <TodoItem itemProp={todo} key={todo.id} setTodos={setTodos} delTodo={delTodo}  setUpdate={setUpdate}
          />
        )
        )
        }
      </ul>
    );
  };
  export default TodosList;
  