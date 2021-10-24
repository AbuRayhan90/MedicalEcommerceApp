import React from "react";

const InputField = ({ text, name, id, autoComplete, htmlFor }) => {
  return (
    <div className="col-span-6 sm:col-span-4 w-full">
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-gray-700"
      >
        {text}
      </label>
      <input
        type="text"
        name={name}
        id={id}
        autoComplete={autoComplete}
        className="my-2 px-4 outline-none w-full rounded-3xl py-2 shadow-sm bg-gray-200"
      />
    </div>
  );
};

export default InputField;
