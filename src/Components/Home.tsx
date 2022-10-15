import { useAppSelector } from "@redux/hooks";
import React from "react";
import { UserState } from "@redux/store/userSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "@redux/store/store";

const Home = () => {
  const userState: UserState = useAppSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!userState.role) {
      navigate("/register");
    }
  }, [userState.role]);

  return (
    <div>
      <p className="text-center font-montserrat mt-4">
        Добро пожаловать
        {` ${userState.firstName} ${userState.lastName}`}
      </p>
    </div>
  );
};

export default Home;
