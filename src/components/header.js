import React from "react";
import moneylogo from "../money.png";

function Header() {
  return (
    <div className="App-header">
      <img src={moneylogo} className="App-logo" alt="logo" />
      <h5>Choose the currency and the amounts to get the exchange rate</h5>
    </div>
  );
}

export default Header;
