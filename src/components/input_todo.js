import React, { Component } from "react"

class InputTodo extends Component {
  state = {
    title:""
  }
  onChange = e => {
   this.setState({  [e.target.name]: e.target.value,
   })
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addToDoProps(this.state.title);
    this.setState({
      title: ""
    });
  };
  render() {
    const {title} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add Todo..." name="title" value={title} onChange={this.onChange}/>
        <button>Submit</button>
      </form>
    )
  }
}
export default InputTodo