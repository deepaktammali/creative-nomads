import styled from "styled-components";
import ArrowUpRight from "../../../../Icons/ArrowUpRight";
import SquigglyLine from "../../../../Icons/SquigglyLine";

interface AboutMeActionProps {}

const AboutMeActionContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 1.5rem 0;
`;

const ActionButtonContainer = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-image: 1;
  padding: 0.1rem 2rem;
  background: linear-gradient(#f1d8d7, #f1d8d7) padding-box,
    linear-gradient(to right, rgba(254, 84, 11), rgba(0, 123, 255)) border-box;
  border: 1px solid transparent;
  border-radius: 10rem;
`;

const ActionButton = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ActionButtonText = styled.span`
  font-size: 1.6rem;
  color: #fe546fdd;
  font-weight: 500;
`;

const AboutMeAction = ({}: AboutMeActionProps) => {
  return (
    <AboutMeActionContainer>
      <SquigglyLine stroke="#fe546f" />
      <ActionButtonContainer>
        <ActionButton>
          <ActionButtonText>Meet Me</ActionButtonText>
          <ArrowUpRight height={40} width={40} />
        </ActionButton>
      </ActionButtonContainer>
    </AboutMeActionContainer>
  );
};

export default AboutMeAction;
