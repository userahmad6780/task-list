import React from "react";
import "../App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import {
  toggleComplete,
  toggleUndo,
  toggleDelete,
  toggleEdit,
} from "../features/dailyTodos/todoSlice";
import { useDispatch } from "react-redux";

const Todo = ({
  task,
  id,
  completed,
  status,
  setInputText,
  setToggle,
  setEdit,
}) => {
  const dispatch = useDispatch();

  const handleEditBtn = () => {
    setInputText(task);
    dispatch(toggleEdit({ id: id }));
    setToggle(false);
    setEdit(id);
  };

  const handleCompleteBtn = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };
  const handleUndoBtn = () => {
    dispatch(toggleUndo({ id: id, completed: completed }));
  };

  return (
    <div className="todo">
      <li className={`todo-item ${status ? "completed" : "undo"}`}>{task}</li>
      <button onClick={handleEditBtn} className="edit-btn">
        <FontAwesomeIcon icon={faUserEdit} />
      </button>
      {!status ? (
        <button onClick={handleCompleteBtn} className="complete-btn ">
          <FontAwesomeIcon icon={faCheck} />
        </button>
      ) : (
        <button onClick={handleUndoBtn} className="complete-btn ">
          <FontAwesomeIcon icon={faExchangeAlt} />
        </button>
      )}
      <button onClick={() => dispatch(toggleDelete(id))} className="trash-btn">
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default Todo;
