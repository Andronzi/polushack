import React from "react";

interface Option {
  value: string;
  label: string;
}

type SelectProps = {
  options: Array<Option>;
};

const Select: React.FC<SelectProps> = ({ options }) => (
  <select className="block form-request__select h-16 font-montserrat p-4 rounded-xl mt-4 w-full">
    {options.map(option => (
      <option value={option.value}>{option.label}</option>
    ))}
  </select>
);

export default Select;
