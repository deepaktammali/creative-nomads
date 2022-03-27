import { useMemo } from "react";
import { findItemPositionsOnCircle } from "../../../../utils";
import SkillItem from "./SkillItem";
import skillItems from "./skillItemsData";
import styled from "styled-components";
import { rotateFullKeyframe } from "../../../../helpers/keyframes";

interface RotatingSkillsProps {}

const BOXSIZEINREM = 35;
const ROTATIONCYCLEDURATION = 20;

const StyledRotatingSkillsContainer = styled.div`
  position: relative;
  width: ${BOXSIZEINREM + "rem"};
  height: ${BOXSIZEINREM + "rem"};
  animation-play-state: running;
  animation: ${rotateFullKeyframe} ${ROTATIONCYCLEDURATION}s linear infinite;
  border: 1px solid #facad3;
  border-radius: 50%;

  &:hover {
    animation-play-state: paused;
  }
`;

const RotatingSkills = ({}: RotatingSkillsProps) => {
  const skillItemsPositions = useMemo(() => {
    const radius = BOXSIZEINREM / 2;
    let positions = findItemPositionsOnCircle(skillItems.length, radius);
    positions = positions.map((pos) => [pos[0] + radius, pos[1] + radius]);
    console.log(positions);
    return positions;
  }, []);

  return (
    <StyledRotatingSkillsContainer>
      {skillItemsPositions.map((itemPos, idx) => (
        <SkillItem
          key={skillItems[idx].name}
          item={skillItems[idx]}
          position={itemPos}
        />
      ))}
    </StyledRotatingSkillsContainer>
  );
};

export default RotatingSkills;
