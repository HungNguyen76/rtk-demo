import React from "react";
import ToDoItem from "./ToDoItem";
import { useSelector } from "react-redux";

export default function ToDoList() {
  const todoList = useSelector((state) => state.todoList);
  return (
    <div>
      {todoList.map((todo) => (
        <ToDoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
