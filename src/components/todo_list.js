import PropTypes from 'prop-types';
import ToDoItem from './todo_item';

const ToDoList = (props) => {
  const {
    todos, handleChangeProps, deleteToDoProps, setUpdateProps,
  } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteToDoProps={deleteToDoProps}
          setUpdateProps={setUpdateProps}
        />
      ))}
    </ul>
  );
};

ToDoList.propTypes = {
  deleteToDoProps: PropTypes.func.isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  setUpdateProps: PropTypes.func.isRequired,
  todos: PropTypes.instanceOf(Array).isRequired,
};

export default ToDoList;
