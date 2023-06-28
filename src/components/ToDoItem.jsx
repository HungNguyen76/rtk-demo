import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/todo/todoSlice";

export default function ToDoItem({ id, title, completed }) {
  console.log(title);
  const [isCompleted, setIsCompleted] = useState(false);
  const dispatch = useDispatch();
  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            checked={isCompleted}
            onChange={() => setIsCompleted(!isCompleted)}
          ></input>
          <span style={isCompleted ? { textDecoration: "line-through" } : {}}>
            {title}
          </span>
        </span>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(removeTodo(id))}
        >
          X
        </button>
      </div>
    </li>
  );
}
