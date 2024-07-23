import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import { FaCalendarDays } from "react-icons/fa6";
import Form from "./Form";
import Todo from "./Todo";
import Edit from "./Edit";
uuidv4();

const TodoList = () => {
  const [todoValue, setTodo] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
      const todos = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTodo(todos);
    });
    return () => unsubscribe();
  }, []);

  const createTodo = async (todo) => {
    await addDoc(collection(db, "todos"), {
      task: todo,
      isEditing: false,
      isDone: false,
    });
  };

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  const editTodo = async (id) => {
    const todoDoc = doc(db, "todos", id);
    const todo = todoValue.find((todo) => todo.id === id);
    await updateDoc(todoDoc, { isEditing: !todo.isEditing });
  };

  const editTask = async (task, id) => {
    const todoDoc = doc(db, "todos", id);
    await updateDoc(todoDoc, { task, isEditing: false, isDone: false });
  };

  const taskDone = async (id) => {
    const todoDoc = doc(db, "todos", id);
    const todo = todoValue.find((todo) => todo.id === id);
    await updateDoc(todoDoc, { isDone: true });
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <div className="px-4 py-2 flex justify-between items-center">
        <h1 className="text-gray-800 font-bold text-2xl uppercase">
          To-Do List
        </h1>
        <FaCalendarDays className="text-xl text-teal-700" />
      </div>
      <Form createTodo={createTodo} />
      <ul className="divide-y divide-gray-200 px-4">
        {todoValue.map((todo) =>
          todo.isEditing ? (
            <Edit key={todo.id} editTodo={editTask} task={todo} />
          ) : (
            <Todo
              key={todo.id}
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
