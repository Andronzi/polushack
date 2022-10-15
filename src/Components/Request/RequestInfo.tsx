import React from "react";
import { useAppSelector } from "@redux/hooks";
import { RootState } from "@redux/store/store";
import downarrow from "@images/down-arrow.svg";

const RequestInfo = () => {
  const userState: UserState = useAppSelector((state: RootState) => state.user);
  const requests = [{ name: "string" }, { name: "string" }];

  return (
    <div className="request-info max-w-screen-2xl mx-auto relative pt-8">
      <div>
        <p className="request-info__title text-center font-montserrat mb-10">
          Просмотр информации по заявкам
        </p>

        <select className="form-request__select h-16 font-montserrat p-4 rounded-xl absolute right-6 top-4">
          <option value="Парк автовышек">Текущие заявки</option>

          <option value="Парк кранов">Парк кранов</option>

          <option value="Парк кранов">Парк погрузчиков</option>
        </select>
      </div>

      {requests.map(element => (
        <div className="request-dropdown relative h-16 font-montserrat flex w-23/24 mx-6 mt-4 flex items-center pl-4 rounded-xl">
          <p>{`Заявка номер ${element.name}`}</p>

          <img
            alt="Стрелочка"
            className="absolute right-2 w-6"
            src={downarrow}
          />
        </div>
      ))}
    </div>
  );
};

export default RequestInfo;
