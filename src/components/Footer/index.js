import React from "react";
import styled from "styled-components";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Bio } from "../../data/constants";
import IEEE from "./Group 26.png"; // Import the logo image

const FooterContainer = styled.div`
  width: 100%;
  background-color: #011762; /* Matches the dark navy blue */
  padding: 20px 40px;
  display: flex;
  justify-content: space-evenly; /* Evenly distribute space between sections */
  align-items: center;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px; /* Reduced gap for smaller screens */
    text-align: center;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const CenterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px; /* Reduced spacing between sections */

  @media (max-width: 768px) {
    align-items: center;
    margin: 0; /* Remove margin for smaller screens */
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Logo = styled.img`
  width: 120px;
  height: auto;
`;

const BranchDetails = styled.div`
  font-size: 14px;
  color: #d1d5db;
  margin-top: 8px;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

const SocialMediaIcon = styled.a`
  font-size: 24px;
  color: white;
  transition: color 0.2s;

  &:hover {
    color: #87ceeb;
  }
`;

const Username = styled.div`
  font-size: 14px;
  margin-top: 10px;
  color: #d1d5db;
`;

const SubscriptionText = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  color: #d1d5db;
  text-align: left; /* Aligns the text to the left */
  width: 100%; /* Ensures it spans the full width of its container */

`;
const SubscriptionForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row; /* Keep input and button in a row */
  gap: 10px;
  justify-content: flex-start; /* Align items to the left by default */

  @media (max-width: 768px) {
    justify-content: space-between; /* Space out items in mobile view */
    width: 100%; /* Ensure the form spans the full width */
  }
`;

const EmailInput = styled.input`
  padding: 8px;
  font-size: 14px;
  border: 1px solid white; /* Added white border */
  border-radius: 4px;
  background-color: #011762; /* Matches the dark navy blue */
  color: white; /* Text color for contrast */
  width: calc(100% - 120px); /* Subtract button width and gap */
  margin-right: 10px;

  &::placeholder {
    color: #d1d5db; /* Placeholder color for better visibility */
  }

  @media (max-width: 768px) {
    margin-right: 0; /* Remove right margin for mobile */
  }
`;

const SubscribeButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  background-color: #012dc1; /* Button background color */
  color: white; /* Button text color */
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 120px; /* Fixed width for button */

  &:hover {
    background-color: #043eff; /* Slightly lighter blue on hover */
  }

  @media (max-width: 768px) {
    margin-left: 10px; /* Add some spacing in mobile view */
  }
`;

function Footer() {
  return (
    <FooterContainer>
      {/* Left Section */}
      <LeftSection>
        <Logo src={IEEE} alt="IEEE Logo" />
        <BranchDetails>
          King Abdulaziz University <br />
          Female Branch
        </BranchDetails>
      </LeftSection>

      {/* Center Section */}
      <CenterSection>
        <div>Follow us</div>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.twitter} target="_blank">
            <TwitterIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="_blank">
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.instagram} target="_blank">
            <InstagramIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Username>@ieee_kau_sb</Username>
      </CenterSection>

      {/* Right Section */}
      <RightSection>
        <SubscriptionText>Stay Informed</SubscriptionText>
        <SubscriptionForm>
          <EmailInput type="email" placeholder="Email" />
          <SubscribeButton>Subscribe</SubscribeButton>
        </SubscriptionForm>
      </RightSection>
    </FooterContainer>
  );
}

export default Footer;
