import React from "react";
import { remove } from "../redux/countSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Counter</h3>
      {count.map((item) => (
        <>
        <li key={item.id}>{item.name} - {item.price}</li>
        <button onClick={() => dispatch(remove(item.id))}>Delete </button>
        </>
      ))}
    </div>
  );
}
