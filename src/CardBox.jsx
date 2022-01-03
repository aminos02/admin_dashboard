import React from 'react'

function CardBox() {
    return (
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
    )
}

export default CardBox
