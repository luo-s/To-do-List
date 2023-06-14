import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm.jsx";
import TodoList from "./TodoList.jsx";

const App = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetch("/api/todo")
      .then((res) => res.json())
      .then((todo) => {
        setTodo(todo);
      });
  }, [todo]);

  return (
    <main className="todo-app">
      <div>
        <p>To-Do List</p>
      </div>
      <div>
        <TodoForm />
        <TodoList todo={todo} />
      </div>
    </main>
  );
};

export default App;
