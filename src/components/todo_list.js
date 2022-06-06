import ToDoItem from "./todo_item";

const ToDoList = props => {
  const {todos, handleChangeProps} = props;
  return (  
   <ul>
     {todos.map(todo => <ToDoItem key={todo.id} todo={todo} handleChangeProps = {handleChangeProps} />)}
   </ul>
  );
}

export default ToDoList