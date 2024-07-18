import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form";
import Todo from "./Todo";
uuidv4();

const TodoList = () => {
  const [todoValue, setTodo] = useState([]);

  const createTodo = (todo) => {
    setTodo([...todoValue, { id: uuidv4(), task: todo, isEditing: false }]);
  };

  return (
    <div className="container bg-gray-700 mt-20 p-8 rounded-md">
      <Form createTodo={createTodo} />
      {todoValue.map((todo, idx) => (
        <Todo task={todo} key={idx} />
      ))}
    </div>
  );
};

export default TodoList;
