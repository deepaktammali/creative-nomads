import styled from "styled-components";
import AboutMe from "./AboutMe";
import ContentHeader from "./ContentHeader";
import SocialMediaBar from "./SocialMediaBar";

interface HomeContentProps {
  className?: string;
}

const HomeContentContainer = styled.div`
  padding: 1rem;
  padding: 2rem 3rem 5rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HomeContent = ({ className }: HomeContentProps) => {
  return (
    <HomeContentContainer className={className ?? undefined}>
      <ContentHeader />
      <AboutMe />
      <SocialMediaBar />
    </HomeContentContainer>
  );
};

export default HomeContent;
