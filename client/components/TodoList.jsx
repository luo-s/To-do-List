import React from "react";
import { TiDelete } from "react-icons/ti";

const TodoList = (props) => {
  const todo = props.todo;

  const deleteTodo = (id) => {
    fetch(`api/todo/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <>
      {todo.map((item) => (
        <div className="todo" key={item.id}>
          {item.description}
          <span id="delete" name={item.id} onClick={() => deleteTodo(item.id)}>
            {" "}
            <TiDelete />{" "}
          </span>
        </div>
      ))}
    </>
  );
};

export default TodoList;
