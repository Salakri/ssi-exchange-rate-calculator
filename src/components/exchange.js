import React, { useState, useEffect } from "react";
import store from "../Store";
import { initRatio, initCurrency } from "./initData";
import { swap } from "../actions/updates";

function Exchange() {
  const [isLoaded, setIsloaded] = useState(false);
  const [ratio, setRatio] = useState(initRatio);
  const [currency, setCurrency] = useState(initCurrency);

  useEffect(() => {
    fetch("https://api.exchangeratesapi.io/latest?base=USD")
      .then((res) => res.json())
      .then((res) => {
        setRatio(res);
        setIsloaded(true);
        const newCurrency = { ...currency };
        newCurrency.convertRatio = res.rates["CAD"];
        setCurrency(newCurrency);
      });
  }, []);

  function displayOptions(isLoaded, ratio) {
    let selectable_options = [];
    if (isLoaded) {
      for (let key in ratio.rates) {
        selectable_options.push(
          <option value={key} key={key}>
            {key}
          </option>
        );
      }
    }
    return selectable_options;
  }

  const updateInputCount = (e) => {
    const newCurrency = { ...currency };
    newCurrency.inputCount = e.target.value;
    newCurrency.outputCount = newCurrency.inputCount * newCurrency.convertRatio;
    setCurrency(newCurrency);
    // store.dispatch(inputCount(e.target.value));
    // console.log(store.getState());
  };

  const updateInputCurrency = (e) => {
    const newCurrency = { ...currency };
    newCurrency.inputCurrency = e.target.value;
    newCurrency.convertRatio = (
      ratio.rates[newCurrency.outputCurrency] /
      ratio.rates[newCurrency.inputCurrency]
    ).toPrecision(10);
    newCurrency.outputCount = newCurrency.inputCount * newCurrency.convertRatio;
    setCurrency(newCurrency);
    // store.dispatch(inputCurrency(e.target.value));
    // console.log(store.getState());
  };

  const updateOutputCount = (e) => {
    const newCurrency = { ...currency };
    newCurrency.outputCount = e.target.value;
    newCurrency.inputCount = (
      newCurrency.outputCount / newCurrency.convertRatio
    ).toPrecision(10);
    setCurrency(newCurrency);
    // store.dispatch(updateOutputCount(e.target.value));
    // console.log(store.getState());
  };

  const updateOutputCurrency = (e) => {
    const newCurrency = { ...currency };
    newCurrency.outputCurrency = e.target.value;
    newCurrency.convertRatio = (
      ratio.rates[newCurrency.outputCurrency] /
      ratio.rates[newCurrency.inputCurrency]
    ).toPrecision(10);
    newCurrency.inputCount = (
      newCurrency.outputCount / newCurrency.convertRatio
    ).toPrecision(10);
    setCurrency(newCurrency);
    // store.dispatch(outputCurrency(e.target.value));
    // console.log(store.getState());
  };

  const updateSwap = () => {
    const newCurrency = { ...currency };
    let temp = newCurrency.inputCurrency;
    newCurrency.inputCurrency = newCurrency.outputCurrency;
    newCurrency.outputCurrency = temp;
    newCurrency.convertRatio = (
      ratio.rates[newCurrency.outputCurrency] /
      ratio.rates[newCurrency.inputCurrency]
    ).toPrecision(10);
    newCurrency.outputCount = newCurrency.inputCount * newCurrency.convertRatio;
    setCurrency(newCurrency);
    // store.dispatch(swap());
    // console.log(store.getState());
  };

  return (
    <div>
      <div className="container">
        <div className="form-inline justify-content-center">
          <select
            className="form-control col-sm-2"
            id="input-currency"
            value={isLoaded ? currency.inputCurrency : "USD"}
            onChange={updateInputCurrency}
          >
            {displayOptions(isLoaded, ratio)}
          </select>
          <div className="form-control col-sm-3">
            <input
              className="col"
              type="number"
              value={isLoaded ? currency.inputCount : 1}
              id="input-currency-count"
              onChange={updateInputCount}
            ></input>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="form-inline justify-content-center mb-3">
          <button className="btn col-sm-2 btn-success" onClick={updateSwap}>
            Swap
          </button>
        </div>
        <div className="form-inline justify-content-center">
          {isLoaded ? (
            <p className="display">
              1 {currency.inputCurrency} = {currency.convertRatio}{" "}
              {currency.outputCurrency}
            </p>
          ) : (
            <p className="display">Loading...</p>
          )}
        </div>
      </div>
      <div className="container">
        <div className="form-inline justify-content-center">
          <select
            className="form-control col-sm-2"
            id="output-currency"
            onChange={updateOutputCurrency}
            value={isLoaded ? currency.outputCurrency : "CAD"}
          >
            {displayOptions(isLoaded, ratio)}
          </select>
          <div className="form-control col-sm-3 numdisplay">
            <input
              className="col"
              type="number"
              value={isLoaded ? currency.outputCount : 1}
              onChange={updateOutputCount}
            ></input>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="form-inline justify-content-center mb-3">
          <button className="btn col-sm-2 btn-success">Save</button>
        </div>
      </div>
    </div>
  );
}

export default Exchange;
