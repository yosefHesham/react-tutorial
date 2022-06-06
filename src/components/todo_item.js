

import styles from "./TodoItem.module.css"

const ToDoItem = props => {
  const {todo, handleChangeProps, deleteToDoProps} = props;
  const {completed,id,title} = todo;
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }
  return (<li className={styles.item}> 
    
    <input
    className={styles.checkbox}
    type="checkbox" checked={completed} onChange={() => handleChangeProps(id)} />
    

    <span style={completed ? completedStyle : null}>
      {title}
    </span>    <button onClick={() => deleteToDoProps(id)}>Delete</button>

    </li>)
}
export default ToDoItem