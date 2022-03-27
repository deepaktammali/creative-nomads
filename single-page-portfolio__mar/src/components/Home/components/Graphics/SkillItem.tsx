import { SkillItemData } from "../../../../types";
import { useState } from "react";

interface SkillItemProps {
  item: SkillItemData;
  position: [number, number];
}

const SkillItem = ({ item, position }: SkillItemProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a href={item.website} target="_blank">
      <item.Icon
        style={{
          left: position[0] + "rem",
          top: position[1] + "rem",
        }}
        className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        width="45"
        height="45"
        fill={hovered ? item.activeColor : undefined}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />
    </a>
  );
};

export default SkillItem;
