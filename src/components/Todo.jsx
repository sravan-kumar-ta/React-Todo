import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { MdOutlineDoneOutline } from "react-icons/md";
import { MdEditCalendar } from "react-icons/md";

const Todo = ({ task, taskDone, editTodo, deleteTodo }) => {
  return (
    <li className="py-4">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          <MdEditCalendar className="text-teal-500" />
          <label for="todo2" className="ml-3 block text-gray-900">
            {task.isDone ? (
              <span className="text-lg font-medium center-strike text-gray-500">
                {task.task}
              </span>
            ) : (
              <span className="text-lg font-medium">{task.task}</span>
            )}
          </label>
        </div>

        <div>
          <div className="flex items-center gap-x-4">
            {task.isDone ? (
              ""
            ) : (
              <MdOutlineDoneOutline
                className="text-xl cursor-pointer text-green-500"
                onClick={() => taskDone(task.id)}
              />
            )}
            <AiFillEdit
              className="text-xl cursor-pointer text-amber-500"
              onClick={() => editTodo(task.id)}
            />
            <BsFillTrashFill
              className="text-xl cursor-pointer text-red-500"
              onClick={() => deleteTodo(task.id)}
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Todo;
