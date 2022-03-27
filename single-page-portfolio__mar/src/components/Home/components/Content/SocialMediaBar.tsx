import styled from "styled-components";
import socialMediaBarIconsData from "./socialMediaBarIconsData";
import SocialMediaItem from "./SocialMediaBarItem";

const StyledSocialMediaBarContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const LineBar = styled.div`
  width: 2rem;
  height: 0.2rem;
  background-color: #fe546f;
`;

const SocialMediaBar = () => {
  return (
    <StyledSocialMediaBarContainer>
      <LineBar />
      {socialMediaBarIconsData.map((item) => (
        <SocialMediaItem item={item} />
      ))}
    </StyledSocialMediaBarContainer>
  );
};

export default SocialMediaBar;
