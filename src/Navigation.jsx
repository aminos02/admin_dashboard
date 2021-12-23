import { useState } from "react";
import React from "react";
import "./navigation.css";
function Navigation() {
  const [hovered, setHovered] = useState([false, false, false, false, false]);

  return (
    <div className="navigation">
      <ul>
        <li>
          <a href="#h">
            <span className="icon">
              <ion-icon name="logo-apple"></ion-icon>
            </span>
            <span className="title">Home</span>
          </a>
        </li>
        <li onMouseOver={()=>setHovered([true,false,false,false,false])} className={hovered[0]?"hovered":""}>
          <a href="#h">
            <span className="icon">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className="title">Dashboard</span>
          </a>
        </li>
        <li onMouseOver={()=>setHovered([false,true,false,false,false])} className={hovered[1]?"hovered":""}>
          <a href="#h">
            <span className="icon">
              <ion-icon name="people-outline"></ion-icon>
            </span>
            <span className="title">Customers</span>
          </a>
        </li>
        <li onMouseOver={()=>setHovered([false,false,true,false,false])} className={hovered[2]?"hovered":""}>
          <a href="#h">
            <span className="icon">
              <ion-icon name="chatbubble-outline"></ion-icon>
            </span>
            <span className="title">Messages</span>
          </a>
        </li>
        <li onMouseOver={()=>setHovered([false,false,false,true,false])} className={hovered[3]?"hovered":""}>
          <a href="#h">
            <span className="icon">
              <ion-icon name="help-outline"></ion-icon>
            </span>
            <span className="title">Help</span>
          </a>
        </li>
        <li onMouseOver={()=>setHovered([false,false,false,false,true])} className={hovered[4]?"hovered":""}>
          <a href="#h">
            <span className="icon">
              <ion-icon name="settings-outline"></ion-icon>
            </span>
            <span className="title">Settings </span>
          </a>
        </li>
        <li>
          <a href="#h">
            <span className="icon">
              <ion-icon name="lock-closed-outline"></ion-icon>
            </span>
            <span className="title">Password</span>
          </a>
        </li>
        <li>
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
