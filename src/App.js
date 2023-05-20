import React from "react";
import { CurrencyList, NavBar } from "./components";
import { StyledApp } from "./styles";

export const App = () => {
  return (
    <StyledApp>
      <NavBar />
      <CurrencyList />
    </StyledApp>
  );
};
