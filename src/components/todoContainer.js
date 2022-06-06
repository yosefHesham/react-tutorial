import React from "react";
import Header from "./header";
import ToDoList from "./todo_list";
class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true,
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false,
      },
      {
        id: 3,
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
  render() {
    const { todos } = this.state;
    return (
      <>
        <Header />
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
