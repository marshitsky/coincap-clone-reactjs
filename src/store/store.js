import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./slices/currencySlice";
import themeReducer from "./slices/themeSlice";
import coinReducer from "./slices/coinSlice";

export const store = configureStore({
  reducer: {
    currencies: currencyReducer,
    theme: themeReducer,
    coin: coinReducer,
  },
});
