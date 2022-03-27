import Home from "../components/Home";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  /* background: linear-gradient(to bottom right,rgba(254,84,11,0.2) 30%,rgba(254,84,11,0.1) 50%,rgba(0,123,255,0.2)) */
  background: linear-gradient(
    135deg,
    rgba(254, 84, 11, 0.25),
    rgba(0, 123, 255, 0.25)
  );
`;

const HomePage = () => {
  return (
    <HomeContainer className="lg:(w-screen h-screen)">
      <Home />
    </HomeContainer>
  );
};

export default HomePage;
