import React from "react";
import { Path, UseFormRegister } from "react-hook-form";

interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

type InputProps = {
  label: Path<IFormValues>;
  placeholder: string;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  register,
  required,
}) => (
  <input
    {...register(label, { required })}
    className="form-registration__input block bg-white h-14 rounded-xl font-montserrat pl-4 mt-4 w-full"
    placeholder={placeholder}
  />
);

export default Input;
