import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form";
import Todo from "./Todo";
import Edit from "./Edit";
uuidv4();

const TodoList = () => {
  const [todoValue, setTodo] = useState([]);

  const createTodo = (todo) => {
    setTodo([
      ...todoValue,
      { id: uuidv4(), task: todo, isEditing: false, isDone: false },
    ]);
  };

  const deleteTodo = (id) => {
    setTodo(todoValue.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodo(
      todoValue.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodo(
      todoValue.map((todo) =>
        todo.id === id
          ? { ...todo, task: task, isEditing: false, isDone: false }
          : todo
      )
    );
  };

  const taskDone = (id) => {
    setTodo(
      todoValue.map((todo) =>
        todo.id === id ? { ...todo, isDone: true } : todo
      )
    );
  };

  return (
    <div className="container bg-gray-700 mt-20 p-8 rounded-md">
      <Form createTodo={createTodo} />

      {todoValue.map((todo, idx) =>
        todo.isEditing ? (
          <Edit key={idx} editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={idx}
            task={todo}
            taskDone={taskDone}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoList;
