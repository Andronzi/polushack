import React from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { RootState } from "@redux/store/store";
import { getRequestsAsStatus, RequestState } from "@redux/store/requestSlice";
import downarrow from "@images/down-arrow.svg";

const RequestInfo = () => {
  const requestState: RequestState = useAppSelector(
    (state: RootState) => state.request,
  );
  const dispatch = useAppDispatch();

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(getRequestsAsStatus(event.target.value));
  };

  return (
    <div className="request-info max-w-screen-2xl mx-auto relative pt-8">
      <p className="request-info__title text-center font-montserrat mb-10">
        Просмотр информации по заявкам
      </p>

      <select
        className="form-request__select h-16 font-montserrat p-4 rounded-xl absolute right-6 top-4"
        onChange={handleSelect}>
        <option
          disabled
          hidden
          selected
          value="Тип заявки">
          Выберите тип заявки
        </option>

        <option value="open">Текущие заявки</option>

        <option value="close">Завершенные заявки</option>

        <option value="all">Все заявки</option>
      </select>

      {requestState.requests.map(element => (
        <div className="request-dropdown relative h-16 font-montserrat flex w-23/24 mx-6 mt-4 flex items-center pl-4 rounded-xl">
          <p>{`Заявка номер ${element.request_id}`}</p>

          <img
            alt="Стрелочка"
            className="absolute right-2 w-6"
            src={downarrow}
          />

          <div style={{ display: "none" }}>
            <p>
              Работник номер
              {element.worker_id}
            </p>

            <p>
              Парк техники
              {element.transport_type}
            </p>

            <p>
              характеристики транспорта
              {element.transport_type}
            </p>

            <p>
              Наименование ТС
              {element.transport_type}
            </p>

            <p>
              Номер ТС
              {element.transport_type}
            </p>

            <p>
              Дата старта
              {element.transport_type}
            </p>

            <p>
              Дата окончания
              {element.transport_type}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RequestInfo;
