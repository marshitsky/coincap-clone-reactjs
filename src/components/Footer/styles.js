import styled from "styled-components";

const StyledFooter = styled.footer`
  display: grid;
  place-items: center;
  padding: 42px;
  background-image: linear-gradient(
    to right,
    rgb(63, 81, 181),
    rgb(100, 181, 246)
  );
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
