import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import logo from "@images/logo-digital.svg";
import { useAppDispatch } from "@redux/hooks";
import { createUser } from "@redux/store/userSlice";
import { useNavigate, Link } from "react-router-dom";
import Input from "@Components/Login/Input";
import Button from "@Components/Button";

export interface IFormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormValues>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormValues> = data => {
    dispatch(createUser(JSON.stringify(data)));
    navigate("/home");
  };

  return (
    <div className="flex direction-col justify-center align-center w-screen">
      <form
        className="form-registration flex justify-center items-center flex-col"
        onSubmit={handleSubmit(onSubmit)}>
        <img
          alt="logo"
          className="w-60"
          src={logo}
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

        <Button value="Авторизоваться" />

        <p className="font-montserrat mt-2 text-2xl">
          Еще не зарегистрированы?
          <Link to="/register">
            <span className="font-montserrat font-semibold text-sky-600	">
              Зарегистрироваться
            </span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
