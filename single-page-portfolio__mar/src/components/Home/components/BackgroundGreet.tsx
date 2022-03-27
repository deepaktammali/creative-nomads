import styled from "styled-components";

const StyledGreetText = styled.span`
  position: absolute;
  font-size: 15rem;
  color: #fe546f15;
  left: 5%;
  font-family: "Hurricane", cursive;
`;

const BackgroundGreet = () => {
  return <StyledGreetText>Hey There</StyledGreetText>;
};

export default BackgroundGreet;
