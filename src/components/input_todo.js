import React, { Component } from "react";

const InputTodo = (props) => {
  const [formState, setFormState] = React.useState({ title: "" });
  const { title } = formState;
  const onChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addToDoProps(title);
    setFormState( prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,

      }
    
    });
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        className="input-text"
        type="text"
        placeholder="Add Todo..."
        name="title"
        value={title}
        onChange={onChange}
      />
      <button className="input-submit">Submit</button>
    </form>
  );
};

export default InputTodo;
