import ToDoItem from "./todo_item";

const ToDoList = (props) => {
  const { todos, handleChangeProps, deleteToDoProps } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteToDoProps={deleteToDoProps}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
