import styled from "styled-components";
import Me from "./Me";
import RotatingSkills from "./RotatingSkills";
import SquigglyCircle from "./SquigglyCircle";

interface HomeGraphicsProps {
  className?: string;
}

const HomeGraphicsContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: clip;
`;

const HomeGraphics = ({ className }: HomeGraphicsProps) => {
  return (
    <HomeGraphicsContainer className={className ?? undefined}>
      <RotatingSkills />
      <Me />
      <SquigglyCircle
        className="absolute -right-22 -bottom-34 z-2 blur-3xl"
        // fill="rgba(0, 123, 255, 0.07)"
        fill="rgba(0, 123, 255, 0.07)"
        stroke="rgba(254,84,11,0.14)"
        strokeWidth={2}
      />
    </HomeGraphicsContainer>
  );
};

export default HomeGraphics;
