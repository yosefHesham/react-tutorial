import React from 'react';
import styles from './TodoItem.module.css';

const ToDoItem = (props) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [title, setTitle] = React.useState(props.todo.title);
  const {
    todo, handleChangeProps, deleteToDoProps, setUpdateProps,
  } = props;
  const { completed, id } = todo;
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  const handleEditing = () => {
    setIsEdit(true);
  };
  const viewMode = {};
  const editMode = {};

  if (isEdit) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const confirmEdit = (e) => {
    if(e.key == "Enter"){
    setUpdateProps(e.target.value, todo.id);
      setIsEdit(false)
    }
  };
  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={completed}
          onChange={() => handleChangeProps(id)}
        />
        <span style={completed ? completedStyle : null}>{title}</span>
        {' '}
        <button onClick={() => deleteToDoProps(id)}>Delete</button>
      </div>
      <input type="text" style={editMode} className={styles.textInput} value={title} onChange={handleChange} onKeyPress={confirmEdit} />

    </li>
  );
};
export default ToDoItem;
