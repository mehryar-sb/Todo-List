import React from "react";
import { useFormik } from "formik";
const TodoEditForm = (props) => {
  const formik = useFormik({
    initialValues: {
      text: "",
    },
    onSubmit: (values) => {
      if (!values.text) return;
      props.onEditValue(values.text);
      formik.resetForm();
    },
  });
  return (
    <form
      autoComplete="off"
      onSubmit={formik.handleSubmit}
      className="flex justify-center h-[45px] w-9/12  border-t border-l border-b rounded-md border-[#5d0cff]"
      action="">
      <input
        id="text"
        name="text"
        onChange={formik.handleChange}
        value={formik.values.text}
        className="w-8/12 px-2 font-medium text-white outline-none bg-inherit"
        type="text"
        placeholder="Edit todo"
        spellCheck="false"
      />
      <button type="submit" className="btn todo-button">
        Edit Todo
      </button>
    </form>
  );
};

export default TodoEditForm;
