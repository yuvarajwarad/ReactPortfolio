import React, { useState } from "react";
import {
  ContactWrapper,
  Email,
  DownloadButton,
  MobileCard,
} from "./ContactElements";
import { MdContentCopy } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";

function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("waradys97@gmail.com");
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 700);
  };

  return (
    <ContactWrapper id="contact">
      <div className="contactContainer">
        <div
          className="SectionTitle"
          style={{
            color: "#ffcc00",
          }}
        >
          Get In Touch
        </div>
        <div className="emailBigCard">
          <Email>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: "5px",
                rowGap: "10px",
                flexWrap: "wrap",
                justifyContent: "center",
                color: "black",
              }}
            >
              <span style={{ color: "black" }}>waradys97@gmail.com</span>
              <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                open={showTooltip}
                onClose={() => setShowTooltip(false)}
                title="Copied!"
                TransitionComponent={Zoom}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                placement="bottom"
              >
                <IconButton onClick={copyToClipboard}>
                  <MdContentCopy
                    size={25}
                    style={{ cursor: "pointer", color: "#151418" }}
                  />
                </IconButton>
              </Tooltip>
            </div>
            <a
              className="btn emailBtn btn-shadow"
              href="mailto:waradys97@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Email
            </a>
          </Email>
        </div>

        {/* Mobile View Section */}
        <MobileCard>
          <div className="contactNumber">
            <div>
              <strong style={{ color: "white" }}>Mobile:</strong>
            </div>
            <div style={{ color: "white" }}>+91 8766833640 / 8793791608</div>
          </div>
        </MobileCard>

        {/* Download Button - only show in desktop view */}
        <DownloadButton>
          <a
            className="btn downloadBtn"
            href="https://drive.google.com/file/d/1z_L92TQOr9VCJQzQqhFT_y8uTlJAmJx0/view"
            target="_blank"
            rel="noopener noreferrer"
            download
            style={{ justifyContent: "center", display: "block" }} // Make sure it behaves like a button
          >
            Download Resume
          </a>
        </DownloadButton>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
