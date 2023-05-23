import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme === "dark" ? (state.theme = "light") : (state.theme = "dark");
    },
  },
});

export default themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;
