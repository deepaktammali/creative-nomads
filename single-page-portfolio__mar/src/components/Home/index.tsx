import styled from "styled-components";
import BackgroundGreet from "./components/BackgroundGreet";
import Content from "./components/Content";
import Graphics from "./components/Graphics";
import ScrollToBottom from "./components/ScrollToBottom";

interface HomeProps {}

const HomeContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: stretch;
  position: relative;
`;

const Home = ({}: HomeProps) => {
  return (
    <HomeContainer className="flex-col lg:flex-row">
      <BackgroundGreet />
      <ScrollToBottom />
      <Content className="lg:w-1/2 w-full h-screen" />
      <Graphics className="lg:w-1/2 w-full h-screen" />
    </HomeContainer>
  );
};

export default Home;
