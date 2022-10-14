import React from "react";

const Button = ({ value }: { value: string }) => (
  <button
    className="form__button h-14 bg-yellow font-montserrat text-center w-full rounded-xl text-white mt-4 font-bold"
    type="button">
    {value}
  </button>
);

export default Button;
