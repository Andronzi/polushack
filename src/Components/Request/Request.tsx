/* eslint-disable react/jsx-child-element-spacing */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-max-depth */
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { createUser } from "@redux/store/userSlice";
import Button from "@Components/Button";
import { YMaps, Map } from "react-yandex-maps";
import { TransportState, changeTransport } from "@redux/store/transportSlice";
import { RootState } from "@redux/store/store";

export interface IFormValues {
  site_type: string;
}

const Request: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormValues>();
  const dispatch = useAppDispatch();
  const transportState: TransportState = useAppSelector(
    (state: RootState) => state.transport,
  );

  const onSubmit: SubmitHandler<IFormValues> = data => {
    dispatch(createUser(JSON.stringify(data)));
  };

  const handleTransportTypeSelect = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    console.log(event.target.value);
    dispatch(
      changeTransport(
        transportState.transports.filter(
          transport => transport.type === event.target.value,
        ),
      ),
    );
  };

  const handleTransportCharacteristic = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    console.log(event.target.value);
    dispatch(
      changeTransport(
        transportState.currentTransports.filter(
          transport => transport.type === event.target.value,
        ),
      ),
    );
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
            {...register("site_type")}
            onChange={handleTransportTypeSelect}>
            <option
              disabled
              hidden
              selected
              value="Парк автовышек">
              Выберите парк техники
            </option>

            {transportState.currentTransports.map(transport => (
              <option value={transport.type}>{transport.type}</option>
            ))}
          </select>

          <select
            className="form-request__select h-16 font-montserrat pl-6 w-1/2 ml-20 rounded-xl"
            {...register("site_type")}
            onChange={handleTransportCharacteristic}>
            <option
              disabled
              hidden
              selected
              value="Парк автовышек">
              Выберите характеристику ТС
            </option>

            {transportState.currentTransports.map(transport => (
              <option value={transport.characteristic}>
                {transport.characteristic}
              </option>
            ))}
          </select>
        </div>

        <div className="form__block flex w-full justify-between mt-4">
          <div className="form__block__input_useLabel w-full">
            <label
              className="block font-montserrat"
              htmlFor="date_input">
              Выберите дату получения ТС
              <input
                className="form-request__input block h-16 font-montserrat pl-6 w-full ml-20 rounded-xl mt-2"
                id="date_input"
                name="date_input"
                type="date"
              />
            </label>
          </div>

          <div className="form__block__input_useLabel w-full ml-20">
            <label
              className="block font-montserrat"
              htmlFor="date_period">
              На какой срок вам требуется ТС (количество дней)
              <input
                className="form-request__input block h-16 font-montserrat pl-6 w-full ml-20 rounded-xl mt-2"
                id="date_period"
                name="date_period"
                type="number"
              />
            </label>
          </div>
        </div>

        <YMaps>
          <div className="w-full">
            <p className="text-center font-montserrat mt-4">
              Выберите геолокацию
            </p>

            <Map
              className="mt-4 w-full h-52"
              defaultState={{ center: [55.75, 37.57], zoom: 9 }}
            />
          </div>
        </YMaps>

        <Button value="Отправить заявку" />
      </form>
    </div>
  );
};

export default Request;
