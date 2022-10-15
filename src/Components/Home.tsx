import { useAppDispatch, useAppSelector } from "@redux/hooks";
import React from "react";
import { setDefaultStatus, UserState } from "@redux/store/userSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "@redux/store/store";
import RequiesterHome from "./Requester/RequesterHome";

const Home = () => {
  const userState: UserState = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (userState.status === "rejected" || userState.status === "waiting") {
      dispatch(setDefaultStatus());
      //   navigate("/register");
    }
  }, [userState.status]);

  return (
    <div className="home">
      <p className="home__title text-center font-montserrat mt-10">
        Добро пожаловать
        {` ${userState.user.firstName ? userState.user.firstName : ""} ${
          userState.user.lastName ? userState.user.lastName : ""
        }`}
      </p>

      <RequiesterHome />
    </div>
  );
};

export default Home;
