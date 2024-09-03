import styled from "@emotion/styled";

export const AboutSection = styled.div`
  margin-top: 5rem;
  padding: 2rem;
  background: #000000; /* Black background */
  color: #ffffff; /* White text for contrast */
`;

export const ProfileImage = styled.img`
  max-width: 120px;
  border-radius: 50%; /* Circular profile image */
  margin: 0 auto;
  display: block;
  margin-bottom: 1rem;
`;

export const SectionTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #ffcc00; /* Golden color for title */
`;

export const BioText = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 2rem;
  color: #e0e0e0; /* Light grey for better readability */
`;

export const TechnologyTagline = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  color: #ffcc00; /* Golden color for tagline */
`;

export const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

export const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 120px;
`;

export const TechIcon = styled.img`
  height: 50px;
  width: 50px;
  margin-bottom: 0.5rem;
  filter: drop-shadow(4px 4px 2px rgba(255, 204, 0, 0.7)); /* Golden shadow */
`;

export const TechName = styled.div`
  font-size: 1rem;
  text-align: center;
  color: #ffffff; /* White color for technology names */
`;

