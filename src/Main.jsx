import "./main.css";
import React from "react";
function Main({ toggle, isToggle }) {
  return (
    <div className={`main ${isToggle ? "active" : ""}`}>
      <div className="topbar">
        <div className="toggle" onClick={() => toggle()}>
          <ion-icon name="menu-outline" />
        </div>
        <div className="search">
          <label>
            <input type="text" placeholder="Search here" name="" id="" />
            <ion-icon name="search-outline" />
          </label>
        </div>
        <div className="user">
          <img src={process.env.PUBLIC_URL + "/images/user.jpg"} alt="user" />
        </div>
      </div>
      <div className="cardBox">
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

      <div className="details">
        <div className="recentOrders">
          <div className="cardHeader">
            <h2>Recent Orders</h2>
            <a href="#" className="btn">
              View All
            </a>
          </div>
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Price</td>
                <td>Payment</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Star Refrigerator</td>
                <td>$1200</td>
                <td>Paid</td>
                <td>
                  <h5 className="status delivered">Delivered</h5>
                </td>
              </tr>
              <tr>
                <td>Window Coolers</td>
                <td>$110</td>
                <td>Due</td>
                <td>
                  <h5 className="status pending">Pending</h5>
                </td>
              </tr>
              <tr>
                <td>Speakers</td>
                <td>$620</td>
                <td>Paid</td>
                <td>
                  <h5 className="status return">Return</h5>
                </td>
              </tr>
              <tr>
                <td>Hp Laptop</td>
                <td>$110</td>
                <td>Due</td>
                <td>
                  <h5 className="status pending">In Progress</h5>
                </td>
              </tr>
              <tr>
                <td>Apple Watch</td>
                <td>$1200</td>
                <td>Paid</td>
                <td>
                  <h5 className="status delivered">Delivered</h5>
                </td>
              </tr>
              <tr>
                <td>Wall Fan</td>
                <td>$110</td>
                <td>Paid</td>
                <td>
                  <h5 className="status pending">Pending</h5>
                </td>
              </tr>
              <tr>
                <td>Adidas Shoes</td>
                <td>$620</td>
                <td>Paid</td>
                <td>
                  <h5 className="status return">Return</h5>
                </td>
              </tr>
              <tr>
                <td>Denim Shirts</td>
                <td>$110</td>
                <td>Due</td>
                <td>
                  <h5 className="status inprogress">In Progress</h5>
                </td>
              </tr>
              <tr>
                <td>Casual Shoes</td>
                <td>$575</td>
                <td>Paid</td>
                <td>
                  <h5 className="status pending">Pending</h5>
                </td>
              </tr>
              <tr>
                <td>Wall Fan</td>
                <td>$110</td>
                <td>Paid</td>
                <td>
                  <h5 className="status pending">Pending</h5>
                </td>
              </tr>
              <tr>
                <td>Denim Shirts</td>
                <td>$110</td>
                <td>Due</td>
                <td>
                  <h5 className="status inprogress">In Progress</h5>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="recentCustomers">
          <div className="cardHeader">
            <h2>Recent Customers</h2>
          </div>

          <table>
            <tr>
              <td width="60px">
                <div className="imgBx">
                  <img
                    src={process.env.PUBLIC_URL + "/images/img1.jpg"}
                    alt=""
                    srcset=""
                  />
                </div>
              </td>
              <td>
                <h4>
                  David <br />
                  <span>Italy</span>
                </h4>
              </td>
            </tr>
            <tr>
              <td width="60px">
                <div className="imgBx">
                  <img
                    src={process.env.PUBLIC_URL + "/images/img2.jpg"}
                    alt=""
                    srcset=""
                  />
                </div>
              </td>
              <td>
                <h4>
                  Jack <br />
                  <span>Algeria</span>
                </h4>
              </td>
            </tr>
            <tr>
              <td width="60px">
                <div className="imgBx">
                  <img
                    src={process.env.PUBLIC_URL + "/images/img3.jpg"}
                    alt=""
                    srcset=""
                  />
                </div>
              </td>
              <td>
                <h4>
                  Lidya <br />
                  <span>France</span>
                </h4>
              </td>
            </tr>
            <tr>
              <td width="60px">
                <div className="imgBx">
                  <img
                    src={process.env.PUBLIC_URL + "/images/img4.jpg"}
                    alt=""
                    srcset=""
                  />
                </div>
              </td>
              <td>
                <h4>
                 Lola <br />
                  <span>Germany</span>
                </h4>
              </td>
            </tr>
            <tr>
              <td width="60px">
                <div className="imgBx">
                  <img
                    src={process.env.PUBLIC_URL + "/images/img5.jpg"}
                    alt=""
                    srcset=""
                  />
                </div>
              </td>
              <td>
                <h4>
                  Tom <br />
                  <span>Italy</span>
                </h4>
              </td>
            </tr>
            <tr>
              <td width="60px">
                <div className="imgBx">
                  <img
                    src={process.env.PUBLIC_URL + "/images/img6.jpg"}
                    alt=""
                    srcset=""
                  />
                </div>
              </td>
              <td>
                <h4>
                  Nouh <br />
                  <span>Tunisie</span>
                </h4>
              </td>
            </tr>
            <tr>
              <td width="60px">
                <div className="imgBx">
                  <img
                    src={process.env.PUBLIC_URL + "/images/img7.jpg"}
                    alt=""
                    srcset=""
                  />
                </div>
              </td>
              <td>
                <h4>
                  Nina <br />
                  <span>Russia</span>
                </h4>
              </td>
            </tr>
            <tr>
              <td width="60px">
                <div className="imgBx">
                  <img
                    src={process.env.PUBLIC_URL + "/images/img8.jpg"}
                    alt=""
                    srcset=""
                  />
                </div>
              </td>
              <td>
                <h4>
                  Vintos <br />
                  <span>Italy</span>
                </h4>
              </td>
            </tr>
            <tr>
              <td width="60px">
                <div className="imgBx">
                  <img
                    src={process.env.PUBLIC_URL + "/images/img9.jpg"}
                    alt=""
                    srcset=""
                  />
                </div>
              </td>
              <td>
                <h4>
                  Chonson <br />
                  <span>China</span>
                </h4>
              </td>
            </tr>
          
            
          </table>
        </div>
      </div>
    </div>
  );
}

export default Main;
