import "./main.css";
import React from "react";

function Main() {
  return (
    <div className="main">
      <div className="topbar">
        <div className="toggle">
          <ion-icon name="menu-outline" />
        </div>
        <div className="search">
          <label>
            <input type="text" placeholder="Search here" name="" id="" />
            <ion-icon name="search-outline" />
          </label>
        </div>
        <div className="user">
          <img1></img1>
            <img src="https://github.com/aminos02/admin_dashboard/blob/main/src/images/user.jpg" alt="user" />
        </div>
      </div>
    </div>
  );
}

export default Main;
