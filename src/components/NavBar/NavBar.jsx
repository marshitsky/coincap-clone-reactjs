import React from "react";
import {
  Nav,
  NavWrapper,
  NavBtnWrapper,
  NavBtn,
  StyledMainLogo,
  Selectors,
} from "./styles";
import { Settings } from "@styled-icons/feather/Settings";
import { SearchAlt2 } from "@styled-icons/boxicons-regular/SearchAlt2";

export const NavBar = () => {
  return (
    <Nav>
      <NavWrapper>
        <NavBtnWrapper>
          <NavBtn>Coins</NavBtn>
          <NavBtn>Exchanges</NavBtn>
          <NavBtn>Swap</NavBtn>
        </NavBtnWrapper>

        <StyledMainLogo alt="main-logo" />

        <Selectors>
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
          <a href>
            <SearchAlt2 style={{ height: "20px" }} />
          </a>
          <a href>
            <Settings style={{ height: "20px" }} />
          </a>
        </Selectors>
      </NavWrapper>
    </Nav>
  );
};
