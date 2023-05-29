import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCoinData = createAsyncThunk("getCoin", async ({ id }) => {
  try {
    const response = await axios.get(`https://api.coincap.io/v2/assets/${id}`);
    return response.data;
  } catch (err) {
    console.log("Error: >>", new Error(err));
  }
});
