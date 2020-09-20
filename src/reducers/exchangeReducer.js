import { initRatio, initCurrency } from "../components/initData";

function exchangeReducer(state = initCurrency, action) {
  const newCurrency = { ...state, rates: { ...state.rates } };
  switch (action.type) {
    case "updateSwap":
      let temp = newCurrency.inputCurrency;
      newCurrency.inputCurrency = newCurrency.outputCurrency;
      newCurrency.outputCurrency = temp;
      newCurrency.convertRatio = (
        initRatio.rates[newCurrency.outputCurrency] /
        initRatio.rates[newCurrency.inputCurrency]
      ).toPrecision(10);
      newCurrency.outputCount =
        newCurrency.inputCount * newCurrency.convertRatio;
      return newCurrency;
    case "updateInputCount":
      newCurrency.inputCount = action.eventValue;
      newCurrency.outputCount =
        newCurrency.inputCount * newCurrency.convertRatio;
      return newCurrency;
    case "updateInputCurrency":
      newCurrency.inputCurrency = action.eventValue;
      newCurrency.convertRatio = (
        initRatio.rates[newCurrency.outputCurrency] /
        initRatio.rates[newCurrency.inputCurrency]
      ).toPrecision(10);
      newCurrency.outputCount =
        newCurrency.inputCount * newCurrency.convertRatio;
      return newCurrency;
    case "updateOutputCount":
      newCurrency.outputCount = action.eventValue;
      newCurrency.inputCount = (
        newCurrency.outputCount / newCurrency.convertRatio
      ).toPrecision(10);
      return newCurrency;

    case "updateOutputCurrency":
      newCurrency.outputCurrency = action.eventValue;
      newCurrency.convertRatio = (
        initRatio.rates[newCurrency.outputCurrency] /
        initRatio.rates[newCurrency.inputCurrency]
      ).toPrecision(10);
      newCurrency.inputCount = (
        newCurrency.outputCount / newCurrency.convertRatio
      ).toPrecision(10);
      return newCurrency;
    default:
      return state;
  }
}

export default exchangeReducer;
