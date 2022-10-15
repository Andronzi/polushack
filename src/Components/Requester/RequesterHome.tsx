import { useAppSelector } from "@redux/hooks";
import React from "react";
import { UserState } from "@redux/store/userSlice";
import { RootState } from "@redux/store/store";
import request from "@images/request.svg";
import document from "@images/document.svg";
import access from "@images/access.svg";
import { Link } from "react-router-dom";
import Function from "./RequesterFunction";

const RequiesterHome = () => {
  const userState: UserState = useAppSelector((state: RootState) => state.user);

  return (
    <div className="flex justify-center mt-6">
      <Link
        className="w-1/5"
        to="/request">
        <Function
          alt="Картинка"
          src={request}
          title="Создать заявку (Забронировать ресурс)"
        />
      </Link>

      <Link
        className="w-1/5 ml-10"
        to="/request-info">
        <Function
          alt="Картинка"
          src={document}
          title="Просмотр информации по заявкам"
        />
      </Link>

      <Link
        className="w-1/5 ml-10"
        to="/transport-info">
        <Function
          alt="Картинка"
          src={access}
          title="Просмотр доступности ТС"
        />
      </Link>
    </div>
  );
};

export default RequiesterHome;
