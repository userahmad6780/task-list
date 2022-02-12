import React from "react";
import "../App.scss";
import { useDispatch } from "react-redux";
import FormTemplate from "./formTemplate";
import { addTodo, addEdit } from "../features/dailyTodos/todoSlice";

const Form = ({ inputText, setInputText, toggle, setToggle, edit }) => {
  const dispatch = useDispatch();

  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    if (!inputText) {
      alert("please enter you task");
    } else if (inputText && !toggle) {
      dispatch(addEdit({ id: edit, title: inputText }));
      setToggle(true);
      setInputText("");
    } else {
      dispatch(addTodo({ title: inputText }));
      setInputText("");
    }
    e.preventDefault();
  };

  return (
    <FormTemplate
      toggle={toggle}
      value={inputText}
      onChange={handleInputText}
      onSubmit={handleSubmit}
    />
  );
};

export default Form;
