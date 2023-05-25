import styled from "styled-components";
import { Colors } from "../../ui/colors";

const StyledFooter = styled.footer`
  display: grid;
  place-items: center;
  padding: 42px;
  background: ${Colors.LINEAR_BACKROUND};
`;

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: calc(1127px + 2rem);
`;

const FooterCol = styled.div`
  display: grid;
  grid-template-rows: auto;
  padding: 14px;
  color: #fff;
`;

const SocialsWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: baseline;
`;

const SocialLink = styled.div`
  width: 25px;
  height: 21px;
`;

export { StyledFooter, FooterCol, FooterWrapper, SocialsWrapper, SocialLink };
