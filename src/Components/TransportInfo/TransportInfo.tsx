/* eslint-disable react/jsx-max-depth */
import React from "react";
import { useAppSelector } from "@redux/hooks";
import { RootState } from "@redux/store/store";
import SelectItem from "@Components/Select";

const TransportInfo = () => {
  const userState: UserState = useAppSelector((state: RootState) => state.user);
  const requests = [
    { name: "Чайка Сервис 2784SG", id: "А095АА/999", status: "Доступна" },
    { name: "Чайка Сервис 2784SG", id: "А095АА/999", status: "Занята" },
  ];

  return (
    <div className="request-info max-w-screen-2xl mx-auto relative pt-8">
      <p className="request-info__title text-center font-montserrat mb-10">
        Просмотр доступности ТС
      </p>

      <div className="transport-info-content flex">
        <div className="transport-info w-3/4">
          {requests.map(element => (
            <div className="request-dropdown relative h-16 font-montserrat flex w-11/12 mx-6 mt-4 flex items-center pl-4 rounded-xl">
              <p className="transport-info__title">{element.name}</p>

              <p className="transport-info__id ml-4 text-grey">{element.id}</p>

              <p
                className="transport-info__status ml-auto mr-4 font-semibold"
                style={{
                  color: element.status === "Доступна" ? "#20B45B" : "#DF3429",
                }}>
                {element.status}
              </p>
            </div>
          ))}
        </div>

        <div className="transport-info-filter">
          <SelectItem
            options={[
              { value: "today", label: "Сегодня" },
              { value: "tomorrow", label: "Завтра" },
              { value: "four", label: "2-4 дня" },
              { value: "week", label: "Неделя" },
            ]}
          />

          <SelectItem
            options={[
              { value: "today", label: "Парк автовышек" },
              { value: "tomorrow", label: "Парк кранов" },
              { value: "four", label: "Парк погрузчиков" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default TransportInfo;
