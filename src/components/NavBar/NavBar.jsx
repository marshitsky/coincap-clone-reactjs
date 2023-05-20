import React from "react";
import { NavWrapper, NavBtnWrapper, NavBtn, StyledMainLogo } from "./styles";

export const NavBar = () => {
  return (
    <>
      <NavWrapper>
        <NavBtnWrapper>
          <NavBtn>Coins</NavBtn>
          <NavBtn>Exchanges</NavBtn>
          <NavBtn>Swap</NavBtn>
        </NavBtnWrapper>

        <StyledMainLogo alt="main-logo" />

        <div>
          <select>
            <option value="1">USD</option>
            <option value="2">BYN</option>
            <option value="3">EUR</option>
            <option value="4">CZN</option>
          </select>

          <select>
            <option value="1">English</option>
            <option value="2">French</option>
            <option value="3">Deutch</option>
            <option value="4">Russian</option>
          </select>
          <button>Search</button>
          <button>Conf</button>
        </div>
      </NavWrapper>
    </>
  );
};
