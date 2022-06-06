
const ToDoItem = props => {
  const {todo, handleChangeProps} = props;
  return (<li> 
    
    <input type="checkbox" checked={todo.completed} onChange={() => handleChangeProps(todo.id)} />{todo.title}</li>)
}
export default ToDoItem