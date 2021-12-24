import { useState } from "react";
import React from "react";
import "./navigation.css";
function Navigation({isToggle}) {
  const [hovered, setHovered] = useState([0,0,0,0,0,0,0]);
  function modifyHovered(index){
    let list=[0,0,0,0,0,0,0];
    list[index]=1;
    setHovered(list)
  }
console.log(isToggle);
  return (
    <div className={`navigation ${isToggle?"active":""}`}>
      <ul>
        <li>
          <a href="#h">
            <span className="icon">
              <ion-icon name="logo-apple"></ion-icon>
            </span>
            <span className="title">Home</span>
          </a>
        </li>
        <li onMouseOver={()=>modifyHovered(0)} className={hovered[0]?"hovered":""}>
          <a href="#h">
            <span className="icon">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className="title">Dashboard</span>
          </a>
        </li>
        <li onMouseOver={()=>modifyHovered(1)} className={hovered[1]?"hovered":""}>
          <a href="#h">
            <span className="icon">
              <ion-icon name="people-outline"></ion-icon>
            </span>
            <span className="title">Customers</span>
          </a>
        </li>
        <li onMouseOver={()=>modifyHovered(2)} className={hovered[2]?"hovered":""}>
          <a href="#h">
            <span className="icon">
              <ion-icon name="chatbubble-outline"></ion-icon>
            </span>
            <span className="title">Messages</span>
          </a>
        </li>
        <li onMouseOver={()=>modifyHovered(3)} className={hovered[3]?"hovered":""}>
          <a href="#h">
            <span className="icon">
              <ion-icon name="help-outline"></ion-icon>
            </span>
            <span className="title">Help</span>
          </a>
        </li>
        <li onMouseOver={()=>modifyHovered(4)} className={hovered[4]?"hovered":""}>
          <a href="#h">
            <span className="icon">
              <ion-icon name="settings-outline"></ion-icon>
            </span>
            <span className="title">Settings </span>
          </a>
        </li>
        <li onMouseOver={()=>modifyHovered(5)} className={hovered[5]?"hovered":""}>
          <a href="#h">
            <span className="icon">
              <ion-icon name="lock-closed-outline"></ion-icon>
            </span>
            <span className="title">Password</span>
          </a>
        </li>
        <li onMouseOver={()=>modifyHovered(6)} className={hovered[6]?"hovered":""}>
          <a href="#h">
            <span className="icon">
              <ion-icon name="log-out-outline"></ion-icon>
            </span>
            <span className="title">Sign out</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
