import React from "react";
import { CgCloseO } from "react-icons/cg";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineFileDone } from "react-icons/ai";
const TodoList = (props) => {
  const { id, text, onRemove, onEdit, onComplete, complete } = props;

  return (
    <li
      className={`w-11/12 h-[54px] rounded-md text-white flex items-center px-5 font-semibold text-xl todo-row justify-between ${
        complete ? "opacity-50 line-through" : ""
      }`}>
      <h5>{text}</h5>
      <div className="flex justify-end w-3/12 gap-2 text-2xl ">
        <CgCloseO
          className="cursor-pointer"
          onClick={() => onRemove(id)}></CgCloseO>
        <FaRegEdit
          className="cursor-pointer"
          onClick={() => onEdit(id)}></FaRegEdit>
        <AiOutlineFileDone
          className="cursor-pointer"
          onClick={() => onComplete(id)}></AiOutlineFileDone>
      </div>
    </li>
  );
};

export default TodoList;
