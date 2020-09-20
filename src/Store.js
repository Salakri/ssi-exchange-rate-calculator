import { configureStore } from "@reduxjs/toolkit";
import exchangeReducer from "./reducers/exchangeReducer";

export default configureStore({
  reducer: {
    exchangeReducer,
  },
});
