
const ToDoItem = props => {
  const {todo, handleChangeProps, deleteToDoProps} = props;
  return (<li> 
    
    <input type="checkbox" checked={todo.completed} onChange={() => handleChangeProps(todo.id)} />
    

    {todo.title}
    <button onClick={() => deleteToDoProps(todo.id)}>Delete</button>

    </li>)
}
export default ToDoItem