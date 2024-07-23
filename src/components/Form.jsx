import React, { useState } from "react";

const Form = ({ createTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(value);
    setValue("");
  };

  return (
    <form className="w-full max-w-sm mx-auto px-4 py-2" onSubmit={handleSubmit}>
      <div className="flex items-center border-b-2 border-teal-500 py-2">
        <input
          type="text"
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          placeholder="What task do you have today?"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          aria-label="Task input"
        />
        <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default Form;
