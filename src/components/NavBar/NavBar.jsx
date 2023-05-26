import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Nav,
  NavWrapper,
  NavBtnWrapper,
  NavBtn,
  Selectors,
  Logo,
} from "./styles";
import { Settings } from "@styled-icons/feather/Settings";
import { SearchAlt2 } from "@styled-icons/boxicons-regular/SearchAlt2";

export const NavBar = () => {
  const { theme } = useSelector((store) => store.theme);

  useEffect(() => {
    document.documentElement.getAttribute("theme");
  }, [theme]);

  return (
    <Nav>
      <NavWrapper>
        <NavBtnWrapper>
          <NavBtn>Coins</NavBtn>
          <NavBtn>Exchanges</NavBtn>
          <NavBtn>Swap</NavBtn>
        </NavBtnWrapper>
        <div>
          {theme === "light" ? (
            <Logo
              src="https://coincap.io/static/logos/black.svg"
              alt="main-logo"
            />
          ) : (
            <Logo
              src="https://coincap.io/static/logos/white.svg"
              alt="main-logo"
            />
          )}
        </div>

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
