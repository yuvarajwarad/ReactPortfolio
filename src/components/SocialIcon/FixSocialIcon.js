import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import styled from "@emotion/styled";
import ScrollAnimation from "react-animate-on-scroll";

const SocialContainer = styled.div`
  position: fixed;
  top: 48%;
  left: 2.5rem;
  transform: translateY(-50%);
  
  ul {
    display: block;
    background-color: transparent; /* Default transparent on desktop */
  }

  .item + .item {
    margin-top: 3rem;
  }

  a {
    font-size: 2.3rem;
    color: rgb(119, 119, 121);
    transition: color 0.3s; /* Smooth transition for hover effect */
    &:hover {
      color: rgb(57, 134, 250);
    }
  }

  @media screen and (max-width: 1112px) {
    margin-top: 2rem;
    position: relative;
    top: 0;
    left: 0;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
      background-color: rgba(255, 255, 255, 0.9); /* Semi-transparent white background */
      padding: 1rem 0;
      border-radius: 12px; /* Rounded corners */
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Subtle shadow for depth */
    }

    a {
      font-size: 2.5rem;
      color: #151418; /* Dark color for icons on white */
      &:hover {
        color: rgb(57, 134, 250);
      }
    }

    .item + .item {
      margin-top: 0;
      margin-left: 2.5rem; /* Space between items in mobile */
    }
  }

  @media screen and (max-width: 768px) {
    ul {
      padding: 1.5rem;
    }

    a {
      font-size: 3rem; /* Bigger icons for smaller mobile screens */
    }

    .item + .item {
      margin-left: 2rem;
    }
  }
`;

function FixSocialIcon() {
  return (
    <SocialContainer>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <ul>
          <li className="item">
            <a
              href="https://www.linkedin.com/in/yuvraj-warad-214bb2228?utm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="item">
            <a
              href="https://github.com/yuvarajwarad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li className="item">
            <a
              href="https://www.instagram.com/mr_yuvraj_07_16/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </ScrollAnimation>
    </SocialContainer>
  );
}

export default FixSocialIcon;
