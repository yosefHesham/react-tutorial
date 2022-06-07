import React from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./header";
import ToDoList from "./todo_list";
import InputTodo from "./input_todo";
import { Route, Switch } from "react-router-dom"



const TodoContainer = () => {
  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem("todos")
    const savedTodos = JSON.parse(temp)
    return savedTodos || []
  }
  const [todos, setToDos] = React.useState(getInitialTodos);
  const handleChange = (id) => {
    setToDos((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  const deleteToDo = (id) => {
    setToDos([...todos.filter((todo) => todo.id !== id)]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setToDos(prev =>  [...prev, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setToDos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: updatedTitle,
          };
        }
        return todo;
      })
    );
  };
  
const fetchToDos = () =>  {
  console.log("Run for the first time")
  if(!localStorage.getItem("todos") || JSON.parse(localStorage.getItem("todos")).length === 0 ) {
    console.log("WTF")
  fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then(response => response.json())
    .then(data => setToDos(data));
  }
}

const saveToDos = () => {

    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  
}
React.useEffect(fetchToDos, [])
  React.useEffect(saveToDos, [todos])
  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addToDoProps={addTodoItem} />
        <ToDoList
          todos={todos}
          handleChangeProps={handleChange}
          deleteToDoProps={deleteToDo}
          setUpdateProps={setUpdate}
        />
      </div>
    </div>
  );
};

export default TodoContainer;
