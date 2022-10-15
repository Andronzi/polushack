import { useAppSelector } from "@redux/hooks";
import React from "react";
import { UserState } from "@redux/store/userSlice";
import { RootState } from "@redux/store/store";
import request from "@images/request.svg";
import document from "@images/document.svg";
import Function from "./RequesterFunction";

const Home = () => {
  const userState: UserState = useAppSelector((state: RootState) => state.user);

  return (
    <div>
      <Function
        alt="Картинка"
        src={request}
        title="Создать заявку (Забронировать ресурс)"
      />

      <Function
        alt="Картинка"
        src={document}
        title="Просмотр информации по заявкам"
      />
    </div>
  );
};

export default Home;
