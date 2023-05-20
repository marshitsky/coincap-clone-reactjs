import styled from "styled-components";
import { MainLogo } from "../../assets";

const NavWrapper = styled.nav`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  place-self: center;
  place-items: center;
  width: 1127px;
`;

const NavBtnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;
`;

const NavBtn = styled.a`
  display: grid;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  background-color: transparent;
  font-size: 1rem;
  color: #4183c4;
  :hover {
    background: rgba(0, 0, 0, 0.1);
    color: #1e70bf;
    /* box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15); */
  }
  cursor: pointer;
`;

const StyledMainLogo = styled(MainLogo)`
  height: 58px;
  padding: 8px 0 8px 0;
`;

export { NavWrapper, NavBtnWrapper, NavBtn, StyledMainLogo };
