import React, { useEffect, useState } from "react";

const TodoForm = () => {
  const [description, setDescription] = useState("");

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  const createTodo = (event) => {
    event.preventDefault();
    fetch("/api/todo", {
      method: "POST",
      body: JSON.stringify({ description }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((todo) => {});
    setDescription("");
  };

  return (
    <div>
      <form className="todo-form" onSubmit={createTodo}>
        <input
          id="input"
          value={description}
          onChange={handleChange}
          type="text"
          placeholder="New To-do..."
          className="todo-input"
        />
        <button type="submit" className="todo-button">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
