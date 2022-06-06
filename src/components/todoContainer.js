import React from "react";
import Header from "./header";
import ToDoItem from "./todo_item";
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
  render() {
    const { todos } = this.state;
    return (
      <>
      <Header/>
      <ToDoList todos={this.state.todos} />
      </>
    );
  }
}
export default TodoContainer;