import { useState } from "react";
import { SocialMediaData } from "../../../../types";

interface SocialMediaItemProps {
  item: SocialMediaData;
}

const SocialMediaItem = ({ item }: SocialMediaItemProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a href={item.website} target="_blank">
      <item.Icon
        className="cursor-pointer"
        height={25}
        width={25}
        fill={hovered ? item.activeColor : undefined}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      ></item.Icon>
    </a>
  );
};

export default SocialMediaItem;
