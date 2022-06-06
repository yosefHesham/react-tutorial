import React, { Component } from "react"

class InputTodo extends Component {
  state = {
    title:""
  }
  onChange = e => {
    console.log(e.target.value)
   this.setState({title:e.target.value})
  };
  render() {
    const {title} = this.state
    return (
      <form>
        <input type="text" placeholder="Add Todo..." name="title" value={title} onChange={this.onChange}/>
        <button>Submit</button>
      </form>
    )
  }
}
export default InputTodo