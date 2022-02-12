import "./App.scss";
import Form from "./components/form";
import React, { useState, useEffect } from "react";
import TodoList from "./components/todolist";
import { useDispatch, useSelector } from "react-redux";
import { getUriTodos } from "./features/dailyTodos/todoSlice";

function App() {
  const [inputText, setInputText] = useState("");
  const [toggle, setToggle] = useState(true);
  const [edit, setEdit] = useState(null);
  const { demy } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUriTodos());
  }, []);

  return (
    <div>
      <header>
        <h1>Daily Tasks</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        toggle={toggle}
        setToggle={setToggle}
        edit={edit}
      />
      <TodoList
        demy={demy}
        inputText={inputText}
        setInputText={setInputText}
        setToggle={setToggle}
        setEdit={setEdit}
      />
    </div>
  );
}

export default App;
