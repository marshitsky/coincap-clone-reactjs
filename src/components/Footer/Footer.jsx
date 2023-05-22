import React from "react";
import {
  StyledFooter,
  FooterCol,
  FooterWrapper,
  SocialLink,
  SocialsWrapper,
} from "./styles";
import { FacebookSquare } from "@styled-icons/boxicons-logos/FacebookSquare";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterWrapper>
        <FooterCol>
          <h2>COINCAP.IO</h2>
          <a href>Methodology</a>
          <a href>Support</a>
          <a href>Our API</a>
          <a href>Rate Comparison</a>
          <a href>Careers</a>
        </FooterCol>
        <FooterCol>
          <h2>LEGALS</h2>
          <a href>Terms of Service</a>
          <a href>Privacy Policy</a>
          <h2>COINCAP.IO</h2>
          <p>
            Neither ShapeShift AG nor CoinCap are in any way associated with
            CoinMarketCap, LLC or any of its goods and services.
          </p>
        </FooterCol>
        <FooterCol>
          <h2>Follow us</h2>
          <SocialLink>
            <a href>
              <Twitter />
            </a>
          </SocialLink>
          <SocialLink>
            <a href>
              <FacebookSquare />
            </a>
          </SocialLink>
        </FooterCol>
        <FooterCol>
          <h2>COINCAP APP AVAILABLE ON</h2>
        </FooterCol>
      </FooterWrapper>
    </StyledFooter>
  );
};
