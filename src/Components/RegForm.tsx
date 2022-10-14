import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import logo from "@images/logo-digital.svg";
import Button from "./Button";
import Input from "./Input";

interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Form: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = data => {
    alert(JSON.stringify(data));
  };

  return (
    <form
      className="form-registration flex justify-center items-center flex-col"
      onSubmit={handleSubmit(onSubmit)}>
      <img
        alt="logo"
        className="w-60"
        src={logo}
      />

      <Input
        label="firstName"
        placeholder="Ваше имя"
        register={register}
        required
      />

      <Input
        label="lastName"
        placeholder="Ваша фамилия"
        register={register}
        required
      />

      <Input
        label="email"
        placeholder="Ваш email"
        register={register}
        required
      />

      <Input
        label="password"
        placeholder="Ваш пароль"
        register={register}
        required
      />

      <Button value="Зарегистрироваться" />
    </form>
  );
};

export default Form;
