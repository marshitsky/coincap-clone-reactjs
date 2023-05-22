import React from "react";
import { CurrencyList, NavBar, Footer } from "./components";
import { StyledApp } from "./styles";

export const App = () => {
  return (
    <StyledApp>
      <NavBar />
      <CurrencyList />
      <Footer />
    </StyledApp>
  );
};
