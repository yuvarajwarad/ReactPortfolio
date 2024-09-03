import React from "react";
import styled from "@emotion/styled";

const FooterSection = styled.footer`
  // background: #000000; /* Black background */
  padding: 2rem 1rem;
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 130%;
    height: 15px;
    background: linear-gradient(45deg, #ffcc00, #ff6699, #66ccff); /* Enhanced gradient for a bolder effect */
    border-radius: 50%;
    box-shadow: 0px -8px 20px rgba(255, 255, 255, 0.3); /* Increased shadow for more depth */
    z-index: -1;
  }
`;

const FooterTitle = styled.div`
  font-size: 2.5rem; /* Slightly larger for emphasis */
  font-weight: bold;
  color: #ffcc00; /* Golden color for the title */
  text-shadow: 3px 3px 12px rgba(255, 255, 255, 0.3); /* Enhanced 3D effect */
  margin-bottom: 1rem;
`;

const FooterText = styled.div`
  font-size: 1.2rem; /* Slightly larger for better readability */
  color: #e0e0e0; /* Light grey text for contrast */
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6); /* Stronger shadow for better contrast */
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterTitle>Yuvraj Warad</FooterTitle>
      <FooterText>© 2024 Yuvraj Warad. All rights reserved.</FooterText>
    </FooterSection>
  );
};

export default Footer;
