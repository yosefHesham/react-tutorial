import ToDoItem from "./todo_item";

const ToDoList = props => {
  const {todos} = props;
  return (  
   <ul>
     {todos.map(todo => <ToDoItem key={todo.id} todo={todo} />)}
   </ul>
  );
}

export default ToDoList