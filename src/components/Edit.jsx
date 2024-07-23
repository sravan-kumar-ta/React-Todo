import React, { useState, useEffect } from "react";

const Edit = ({ editTodo, task }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(task.task);
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
  };

  return (
    <form className="w-full max-w-sm mx-auto px-4 py-1" onSubmit={handleSubmit}>
      <div className="flex items-center border-2 border-teal-500 rounded">
        <input
          type="text"
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          placeholder="What task do you have today?"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          aria-label="Task input"
        />
        <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white my-1 px-2 mx-2 rounded">
          Update Task
        </button>
      </div>
    </form>
  );
};

export default Edit;
