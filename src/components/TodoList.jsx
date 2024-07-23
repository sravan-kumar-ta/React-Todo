import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaCalendarDays } from "react-icons/fa6";
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
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <div className="px-4 py-2 flex justify-between items-center">
        <h1 className="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
        <FaCalendarDays className="text-xl text-teal-700" />
      </div>
      <Form createTodo={createTodo} />
      <ul className="divide-y divide-gray-200 px-4">
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
      </ul>
    </div>
  );
};

export default TodoList;
