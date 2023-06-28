import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todo/todoSlice";

export default function AddToDo() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e, {id, title}) => {
    e.preventDefault()
    dispatch(addTodo({id, title}))
  }
  return (
    <div>
      <form className="form-inline mt-3 mb-3 d-flex" onSubmit={(e) => handleSubmit(e, {id:Date.now(),title:task})}>
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          placeholder="Add a todo"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button
          type="submit"
          className="btn btn-secondary mb-3"
        >
          Add
        </button>
      </form>
    </div>
  );
}
