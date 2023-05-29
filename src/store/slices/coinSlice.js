import { createSlice } from "@reduxjs/toolkit";
import { getCoinData } from "../asyncThunk/coinThunk";

const initialState = {
  status: "idle",
  coin: "string",
};

const coinSlice = createSlice({
  name: "coin",
  initialState,
  reducers: {},

  extraReducers: {
    [getCoinData.pending]: (state) => {
      state.status = "pending";
    },

    [getCoinData.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.coin = action.payload;
    },

    [getCoinData.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export default coinSlice.reducer;
