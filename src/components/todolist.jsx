import React from "react";
import "../App.scss";
import Todo from "./task";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const TodoList = ({ demy, inputText, setInputText, setToggle, setEdit }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {demy.isLoading ? (
          <div className="todo-container">
            <h1>Data is Loading</h1>
            <button className="loading-btn">
              <FontAwesomeIcon icon={faSyncAlt} />
            </button>
          </div>
        ) : (
          demy.posts.map((task) => (
            <Todo
              setEdit={setEdit}
              setToggle={setToggle}
              setInputText={setInputText}
              inputText={inputText}
              key={task.id}
              id={task.id}
              complete={task.completed}
              task={task.title}
              status={task.completed}
            />
          ))
        )}
        {demy.isError ? (
          <div className="todo-container">
            <h1>Error Occure</h1>
            <button className="error-btn">
              <FontAwesomeIcon icon={faExclamationTriangle} />
            </button>
          </div>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
};

export default TodoList;
