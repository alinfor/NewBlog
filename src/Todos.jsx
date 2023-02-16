import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initTodos } from "./action/initTodos";

const Todos = () => {
  const Todos = useSelector((store) => store.reducerTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initTodos());
  }, []);

  console.log(Todos);
  return (
    <></>
  );
};

export default Todos;