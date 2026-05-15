import React from "react";

const Input = ({ ...props }) => {
  return (
    <div>
      <input
        {...props}
        className="w-full bg-gray-200 rounded-lg focus:ring-1 focus:ring-black/30 transition duration-200"
      />
    </div>
  );
};

export default Input;
