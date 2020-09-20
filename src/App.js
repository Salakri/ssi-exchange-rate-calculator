import React from "react";
import moneylogo from "./money.png";
import "./App.css";

function App() {
  const OPTIONS = [
    "AED",
    "ARS",
    "AUD",
    "BGN",
    "BRL",
    "BSD",
    "CAD",
    "CHF",
    "CLP",
    "CNY",
    "COP",
    "CZK",
    "DKK",
    "DOP",
    "EGP",
    "EUR",
    "FJD",
    "GBP",
    "GTQ",
    "HKD",
    "HRK",
    "HUF",
    "IDR",
    "ILS",
    "INR",
    "ISK",
    "JPY",
    "KRW",
    "KZT",
    "MXN",
    "MYR",
    "NOK",
    "NZD",
    "PAB",
    "PEN",
    "PHP",
    "PKR",
    "PLN",
    "PYG",
    "RON",
    "RUB",
    "SAR",
    "SEK",
    "SGD",
    "THB",
    "TRY",
    "TWD",
    "UAH",
    "USD",
    "UYU",
    "ZAR",
  ];

  const SELECTABLE_OPTIONS = [];
  for (let i = 0; i < OPTIONS.length; i++) {
    SELECTABLE_OPTIONS.push(
      <option value={i + 1} key={i + 1}>
        {OPTIONS[i]}
      </option>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={moneylogo} className="App-logo" alt="logo" />
        <hi>Choose the currency and the amounts to get the exchange rate</hi>
      </header>
      <body>
        <div className="container">
          <div className="form-inline justify-content-center">
            <select class="form-control col-sm-2" id="input-currency">
              {SELECTABLE_OPTIONS}
            </select>
            <div className="form-control col-sm-4">
              <input type="number"></input>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="form-inline justify-content-center mb-3">
            <button className="btn col-sm-2 btn-success">Swap</button>
          </div>
          <div className="form-inline justify-content-center">
            <p className="display">1 EGP = 0.063634 USD</p>
          </div>
        </div>
        <div className="container">
          <div className="form-inline justify-content-center">
            <select class="form-control col-sm-2" id="output-currency">
              {SELECTABLE_OPTIONS}
            </select>
            <div className="form-control col-sm-4 numdisplay">
              <input type="number"></input>
            </div>
          </div>
        </div>
        <div className="container">
          <hr></hr>
          <p className="display">History:</p>
          <div className="justify-content-center">
            <button className="btn history">
              <a>1 EGP = 0.063634 USD</a>
            </button>
            <button className="btn history">
              <a>1 EGP = 0.063634 USD</a>
            </button>
            <button className="btn history">
              <a>1 EGP = 0.063634 USD</a>
            </button>
            <button className="btn history">
              <a>1 EGP = 0.063634 USD</a>
            </button>
          </div>
        </div>
        <div className="container">
          <div className="form-inline justify-content-center mb-3">
            <button className="btn col-sm-2 btn-success">Clear</button>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
