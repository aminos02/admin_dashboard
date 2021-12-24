import "./main.css";
import React from "react";
  function Main({toggle,isToggle}) {
  return (
    <div className={`main ${isToggle?"active":""}`}>
      <div className="topbar">
        <div className="toggle" onClick={()=>toggle()}>
          <ion-icon name="menu-outline" />
        </div>
        <div className="search">
          <label>
            <input type="text" placeholder="Search here" name="" id="" />
            <ion-icon name="search-outline" />
          </label>
        </div>
        <div className="user">
            <img src={process.env.PUBLIC_URL+'/images/user.jpg'} alt="user" />
        </div>
      </div>
      <div className="cardbox">
        <div className="card">
          <div>
            <div className="numbers">2,104</div>
            <div className="cardName">Daily Views</div>
          </div>
          <div className="iconBx">
            <ion-icon name="eye-outline"></ion-icon>
          </div>
        </div>
        <div className="card">
          <div>
            <div className="numbers">71</div>
            <div className="cardName">Sales</div>
          </div>
          <div className="iconBx">
            <ion-icon name="cart-outline"></ion-icon>
          </div>
        </div>
        <div className="card">
          <div>
            <div className="numbers">1504</div>
            <div className="cardName">Comments</div>
          </div>
          <div className="iconBx">
            <ion-icon name="chatbubbles-outline"></ion-icon>
          </div>
        </div>
        <div className="card">
          <div>
            <div className="numbers">$5402</div>
            <div className="cardName">Earning</div>
          </div>
          <div className="iconBx">
            <ion-icon name="cash-outline"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
