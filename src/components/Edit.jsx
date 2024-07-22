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
    <form
      className="mb-4 font-primary w-full text-center"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="outline-none bg-transparent border border-gray-500
        p-2 w-9/12 mt-3 text-white rounded placeholder:text-gray-300"
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="bg-gray-500 border-none p-2 text-white cursor-pointer rounded ml-2">
        Update Task
      </button>
    </form>
  );
};

export default Edit;
