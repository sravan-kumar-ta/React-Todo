import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

const Todo = ({ task, editTodo, deleteTodo }) => {
  return (
    <div
      className="flex justify-between items-center bg-violet-800
      text-white py-3 px-4 rounded-md mb-1"
    >
      <p className="font-primary">{task.task}</p>
      <div className="flex items-center gap-x-4">
        <AiFillEdit
          className="text-xl cursor-pointer"
          onClick={() => editTodo(task.id)}
        />
        <BsFillTrashFill
          className="text-xl cursor-pointer"
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
