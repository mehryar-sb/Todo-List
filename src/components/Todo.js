import React, { useState } from "react";
import TodoEditForm from "./TodoEditForm";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const [Todoes, setTodoes] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [render, setRender] = useState(false);

  const [Id, setId] = useState("");
  const submitHandler = function (todo) {
    if (!todo.text) return;
    setTodoes([todo, ...Todoes]);
  };

  const removeHandler = function (id) {
    const removeTodo = Todoes.filter((todo) => todo.id !== id);
    setTodoes(removeTodo);
  };
  const completeHandler = function (id) {
    Todoes.forEach((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
    });
    setRender(!render);
  };

  const editHandler = function (id) {
    setIsEdit(true);
    setId(id);
  };

  const editValue = function (value) {
    Todoes.forEach((todo) => {
      if (todo.id === Id) {
        todo.text = value;
      }
    });
    setIsEdit(false);
  };

  const clearAllHandler = function () {
    setTodoes([]);
  };

  return (
    <div className=" w-[96%]  sm:w-9/12 md:w-8/12 lg:w-6/12 xl:w-[37%] bg-[#161a2b]  mx-auto mt-10 mb-5 min-h-[550px] rounded-xl flex items-center py-5 flex-col gap-7">
      <h3 className="text-white">Whats the Plan for Today?</h3>
      <TodoForm onSaveData={submitHandler}></TodoForm>
      {Todoes.length === 0 ? (
        <h2 className="mt-4">Please Add Your Todo...</h2>
      ) : (
        ""
      )}
      {!isEdit ? (
        <div className="flex flex-col justify-between w-full grow">
          <ul className="flex flex-col items-center w-full gap-2 ">
            {Todoes.map((todo) => {
              return (
                <TodoList
                  onRemove={removeHandler}
                  onEdit={editHandler}
                  onComplete={completeHandler}
                  key={todo.id}
                  id={todo.id}
                  complete={todo.complete}
                  text={todo.text}></TodoList>
              );
            })}
          </ul>
          {Todoes.length === 0 ? (
            ""
          ) : (
            <button
              onClick={clearAllHandler}
              className=" h-[40px]  btn todo-button rounded-lg  self-center mt-4   ">
              Clear List
            </button>
          )}
        </div>
      ) : (
        <TodoEditForm onEditValue={editValue}></TodoEditForm>
      )}
    </div>
  );
};

export default Todo;
