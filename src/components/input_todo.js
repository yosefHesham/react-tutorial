import React from 'react';
import PropTypes from 'prop-types';

const InputTodo = (props) => {
  const [formState, setFormState] = React.useState({ title: '' });
  const { title } = formState;
  const onChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const { addToDoProps } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    addToDoProps(title);
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,

    }));
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
      <button type="submit" className="input-submit">Submit</button>
    </form>
  );
};

InputTodo.propTypes = {
  addToDoProps: PropTypes.func.isRequired,
};

export default InputTodo;
