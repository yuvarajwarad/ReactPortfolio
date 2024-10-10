import { IconButton, Tooltip, styled } from "@mui/material";
import React, { useState, useEffect } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { animateScroll as scroll } from "react-scroll";

const StyledIconButton = styled(IconButton)`
  position: fixed;
  bottom: 10px;
  right: 10px;
  color: white; /* Keep text color white for visibility on black background */
  padding: 5px;
`;

const StyledArrowIcon = styled(MdKeyboardArrowUp)`
  background-color: #444; /* Dark background for the icon button */
  color: white; /* Ensure the icon is white for better visibility */
  border-radius: 50%;
  padding: 5px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.6); /* Darker shadow for contrast */
  transition: background-color 0.3s;

  /* Change background color on hover for better interaction feedback */
  &:hover {
    background-color: #007bff; /* Blue background on hover */
  }
`;

function ScrollToTop() {
  const [open, setOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  const handleClick = () => {
    setOpen(false);
    scroll.scrollToTop({ duration: 0 });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 500;
      if (window.scrollY > scrollThreshold) setShouldRender(true);
      else setShouldRender(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    shouldRender && (
      <Tooltip
        title="Scroll to top"
        placement="top"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <StyledIconButton
          size="large"
          aria-label="scroll to top"
          onClick={handleClick}
        >
          <StyledArrowIcon fontSize={40} />
        </StyledIconButton>
      </Tooltip>
    )
  );
}

export default ScrollToTop;
