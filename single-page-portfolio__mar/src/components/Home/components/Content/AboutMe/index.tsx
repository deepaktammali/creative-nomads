import styled from "styled-components";
import AboutMeAction from "./AboutMeAction";
import AboutMeBody from "./AboutMeBody";
import AboutMeHeader from "./AboutMeHeader";

interface AboutMeProps {}

const StyledAboutMeContainer = styled.div`
  width: 100%;
`;

const AboutMe = ({}: AboutMeProps) => {
  return (
    <StyledAboutMeContainer>
      <AboutMeHeader />
      <AboutMeBody />
      <AboutMeAction />
    </StyledAboutMeContainer>
  );
};

export default AboutMe;
