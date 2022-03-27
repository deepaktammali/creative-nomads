import styled from "styled-components";
import Avatar from "./Avatar";
import PhotoDottedFrame from "./PhotoDottedFrame";

interface MeProps {}

const StyledMeContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledAvatar = styled(Avatar)`
  position: absolute;
  width: 13rem;
  height: auto;
`;

const StyledPhotoDottedFrame = styled(PhotoDottedFrame)`
  width: 16rem;
  height: 16rem;
  stroke: #fe546faa;
`;

const Me = ({}: MeProps) => {
  return (
    <StyledMeContainer>
      <StyledPhotoDottedFrame></StyledPhotoDottedFrame>
      <StyledAvatar />
    </StyledMeContainer>
  );
};

export default Me;
