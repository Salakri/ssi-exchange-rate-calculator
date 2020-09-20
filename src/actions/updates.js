export const swap = () => {
  return {
    type: "updateSwap",
    payload: {
      id: 0,
      description: "update Swap",
    },
  };
};

export const inputCount = (e) => {
  return {
    type: "updateInputCount",
    payload: {
      id: 1,
      eventValue: e,
      description: "update Input Count",
    },
  };
};

export const inputCurrency = (e) => {
  return {
    type: "updateInputCurrency",
    payload: {
      id: 2,
      eventValue: e,
      description: "update Input Currency",
    },
  };
};

export const outputCount = (e) => {
  return {
    type: "updateOutputCount",
    payload: {
      id: 3,
      eventValue: e,
      description: "Update Output Count",
    },
  };
};

export const outputCurrency = (e) => {
  return {
    type: "updateOutputCurrency",
    payload: {
      id: 4,
      eventValue: e,
      description: "Update Output Currency",
    },
  };
};
