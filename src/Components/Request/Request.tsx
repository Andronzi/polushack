/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-max-depth */
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "@redux/hooks";
import { createUser } from "@redux/store/userSlice";
import { useNavigate, Link } from "react-router-dom";
import Button from "@Components/Button";

export interface IFormValues {
  site_type: string;
}

const Request: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormValues>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormValues> = data => {
    dispatch(createUser(JSON.stringify(data)));
  };

  return (
    <div className="flex direction-col justify-center align-center w-screen">
      <form
        className="form-request flex justify-center items-center flex-col max-w-6xl w-full"
        onSubmit={handleSubmit(onSubmit)}>
        <p className="text-center font-montserrat mt-6">
          Создать заявку (Забронировать ресурс)
        </p>

        <div className="form__block flex w-full justify-between mt-4">
          <select
            className="form-request__select h-16 font-montserrat pl-6 w-1/2 rounded-xl"
            {...register("site_type")}>
            <option value="Парк автовышек">Парк автовышек</option>

            <option value="Парк кранов">Парк кранов</option>

            <option value="Парк кранов">Парк погрузчиков</option>
          </select>

          <select
            className="form-request__select h-16 font-montserrat pl-6 w-1/2 ml-20 rounded-xl"
            {...register("site_type")}>
            <option value="Парк автовышек">Выберите характеристику ТС </option>
          </select>
        </div>

        <div className="form__block flex w-full justify-between mt-4">
          <div className="form__block__input_useLabel w-full">
            <label
              className="block font-montserrat"
              htmlFor="date_input">
              Выберите дату получения ТС
            </label>

            <input
              className="form-request__input block h-16 font-montserrat pl-6 w-full ml-20 rounded-xl mt-2"
              id="date_input"
              name="date_input"
              type="date"
            />
          </div>

          <div className="form__block__input_useLabel w-full ml-20">
            <label
              className="block font-montserrat"
              htmlFor="date_period">
              На какой срок вам требуется ТС
            </label>

            <input
              className="form-request__input block h-16 font-montserrat pl-6 w-full ml-20 rounded-xl mt-2"
              id="date_period"
              name="date_period"
              type="text"
            />
          </div>
        </div>

        <input
          className="form-request__input block h-16 font-montserrat pl-6 w-full rounded-xl mt-4"
          placeholder="Выберите геолокацию"
        />

        <Button value="Отправить заявку" />
      </form>
    </div>
  );
};

export default Request;
