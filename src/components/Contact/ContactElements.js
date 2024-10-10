import styled from "@emotion/styled";

export const ContactWrapper = styled.div`
  margin: 5rem 0;
  background-color: black;
  padding: 2rem;
  text-align: center;
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center; /* Center content for better alignment */
  flex-wrap: wrap;
  row-gap: 1rem;

  span {
    font-size: 1rem;
    font-weight: 400;
    color: white;
  }

  @media (min-width: 992px) {
    span {
      font-size: 1.5rem;
    }
  }
`;

// Styled component for mobile-specific content
export const MobileCard = styled.div`
  display: none; // Hide by default

  @media (max-width: 768px) { // Show only on mobile
    display: block;
    margin-top: 2rem;
    color: white;
    text-align: center;

    .contactNumber {
      strong {
        color: white; // Color for the mobile label
      }
    }
  }
`;

export const DownloadButton = styled.div`
  margin-top: 2rem;

  a {
    display: inline-block; /* Make the link behave like a button */
    background-color: #151418;
    color: white;
    padding: 0.8rem 2rem;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    transition: background-color 0.3s; /* Smooth transition for hover effect */

    &:hover {
      background-color: #373737;
    }


    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;
