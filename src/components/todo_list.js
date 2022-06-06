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

export default ToDoList;
