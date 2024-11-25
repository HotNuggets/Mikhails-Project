import React from "react";
import { useNavigate } from "react-router-dom";
import "./Main.scss";

const Main: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="homeContainer">
      <h1 className="title">Welcome to the Restaurant!</h1>
      <button className="button" onClick={() => navigate("/menu")}>
        Go to Menu
      </button>
    </div>
  );
};

export default Main;
