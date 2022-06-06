import React from "react";
import Header from "./header";
import ToDoList from "./todo_list";
import InputTodo from "./input_todo"
import { v4 as uuidv4 } from "uuid";


class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id:  uuidv4(),
        title: "Setup development environment",
        completed: true,
      },
      {
        id:  uuidv4(),
        title: "Develop website and add content",
        completed: false,
      },
      {
        id:  uuidv4(),
        title: "Deploy to live server",
        completed: false,
      },
    ],
  };
  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
         return { 
          ...todo, 
          completed: !todo.completed}
        }
        return todo;
      }),
    }));
  };
  deleteToDo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  }
  addTodoItem = title => {
    const newTodo = {
      id:  uuidv4(),
      title: title,
      completed: false
    };
    this.setState({ 
      todos: [...this.state.todos, newTodo]
    });
  };
  render() {
    const { todos } = this.state;
    return (
      <>
        <Header />
        <InputTodo addToDoProps={this.addTodoItem}/>
        <ToDoList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          deleteToDoProps={this.deleteToDo}
        />
      </>
    );
  }
}
export default TodoContainer;
