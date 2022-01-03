import "./main.css";
import Topbar from "./Topbar";
import React from "react";
import CardBox from "./CardBox";
import Details from "./Details";
import BarChart from "./BarChart";

function Main({ toggle, isToggle }) {
  return (
    <div className={`main ${isToggle ? "active" : ""}`}>
      <Topbar toggle={toggle}/>
      <CardBox/>
      <Details/>
    </div>
  );
}

export default Main;
