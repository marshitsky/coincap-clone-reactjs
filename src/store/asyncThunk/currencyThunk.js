import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCurrencies = createAsyncThunk(
  "getCurrecies",
  async (coinsQty) => {
    try {
      const response = await axios.get(
        `https://api.coincap.io/v2/assets/?limit=${coinsQty * 10}`
      );
      return response.data;
    } catch (err) {
      console.log("Error: >>", Error(err));
    }
  }
);
