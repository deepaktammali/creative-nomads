import Avvvatars from "avvvatars-react";

interface ContentHeaderProps {}

const ContentHeader = ({}: ContentHeaderProps) => {
  return (
    <div className="flex">
      <Avvvatars value="tammalideepak" style="shape" size={50} />
    </div>
  );
};

export default ContentHeader;
