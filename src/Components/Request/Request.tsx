/* eslint-disable react/jsx-child-element-spacing */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-max-depth */
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import Button from "@Components/Button";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { TransportState, changeTransport } from "@redux/store/transportSlice";
import { RootState } from "@redux/store/store";
import { createRequest } from "@redux/store/requestSlice";

export interface IFormValues {
  type: string;
  characteristics: string;
  target_date: Date;
  period: number;
  coords: number[];
}

const Request: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormValues>();
  const [selectState, setSelectState] = React.useState("Выберите парк техники");
  const [mapState, setMapState] = React.useState([55.75, 37.57]);
  const dispatch = useAppDispatch();
  const transportState: TransportState = useAppSelector(
    (state: RootState) => state.transport,
  );
  const defaultMapState = { center: [55.75, 37.57], zoom: 9 };
  const mapRef = React.useRef();

  const onSubmit: SubmitHandler<IFormValues> = data => {
    data.coords = mapState;
    dispatch(createRequest(JSON.stringify(data)));
  };

  const handleTransportTypeSelect = (event: any) => {
    const transportWithType = transportState.transports.filter(
      transport => transport.type === event.target.value,
    );
    dispatch(changeTransport(transportWithType));
    setSelectState(event.target.value);
  };

  const handleMapClick = (event: any) => {
    // eslint-disable-next-line no-underscore-dangle
    setMapState(event._sourceEvent.originalEvent.coords);
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
            {...register("type")}
            onChange={handleTransportTypeSelect}
            value={selectState}>
            {transportState.types.map(type => (
              <option value={type}>{type}</option>
            ))}
          </select>

          <select
            className="form-request__select h-16 font-montserrat pl-6 w-1/2 ml-20 rounded-xl"
            {...register("characteristics")}>
            <option
              disabled
              hidden
              selected
              value="Парк автовышек">
              Выберите характеристику ТС
            </option>

            {transportState.currentCharacterestics.map(characterestic => (
              <option value={characterestic}>{characterestic}</option>
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
                type="date"
                {...register("target_date")}
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
                type="number"
                {...register("period")}
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
              ref={mapRef}
              className="mt-4 w-full h-52"
              defaultState={defaultMapState}
              onClick={handleMapClick}>
              <Placemark geometry={mapState} />
            </Map>
          </div>
        </YMaps>

        <Button value="Отправить заявку" />
      </form>
    </div>
  );
};

export default Request;
