import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";

const FormTemplate = ({ value, onChange, onSubmit, toggle }) => {
  return (
    <form>
      <input
        value={value}
        onChange={onChange}
        type="text"
        className="todo-input"
      />
      {toggle ? (
        <button onClick={onSubmit} className="todo-button" type="submit">
          <FontAwesomeIcon icon={faPlusSquare} />
        </button>
      ) : (
        <button onClick={onSubmit} className="todo-button" type="submit">
          <FontAwesomeIcon icon={faUserEdit} />
        </button>
      )}
    </form>
  );
};

export default FormTemplate;
