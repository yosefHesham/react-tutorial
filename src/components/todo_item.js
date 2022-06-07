import PropTypes from 'prop-types';
import React from 'react';
import styles from './TodoItem.module.css';

const ToDoItem = (props) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const {
    todo, handleChangeProps, deleteToDoProps, setUpdateProps,
  } = props;

  const [title, setTitle] = React.useState(todo.title);

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
    if (e.key === 'Enter') {
      setUpdateProps(e.target.value, todo.id);
      setIsEdit(false);
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
        <button type="button" onClick={() => deleteToDoProps(id)}>Delete</button>
      </div>
      <input type="text" style={editMode} className={styles.textInput} value={title} onChange={handleChange} onKeyPress={confirmEdit} />

    </li>
  );
};

ToDoItem.propTypes = {
  deleteToDoProps: PropTypes.func.isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  setUpdateProps: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    completed: PropTypes.bool,
    id: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};
export default ToDoItem;
