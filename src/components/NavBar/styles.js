import styled from "styled-components";
import { Colors } from "../../ui/colors";

const Nav = styled.nav`
  display: grid;
  place-items: center;
  background: ${Colors.PRIMARY_BACKGROUND};
`;

const NavWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  place-self: center;
  place-items: center;
  max-width: 1127px;
`;

const NavBtnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;
`;

const Logo = styled.img`
  height: 50px;
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

const Selectors = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  color: ${Colors.FONT_COLOR};
`;

export { Nav, NavWrapper, Logo, NavBtnWrapper, NavBtn, Selectors };
