import styled from "styled-components";

interface AboutMeHeaderProps {}

const AboutMeHeader = ({}: AboutMeHeaderProps) => {
  return (
    <div className="flex flex-col w-full gap-4">
      <span className="text-5xl font-extrabold font-serif">Deepak Tammali</span>
      <div className="flex gap-4 items-center">
        <div className="w-[3.5rem] h-[0.2rem] bg-[#fe546f]"></div>
        <div className="flex gap-2 items-end">
          <span className="text-4xl font-bold text-[#337ea7]">Designer</span>
          <span className="text-xl font-light text-[#000]">and</span>
          <span className="text-4xl font-bold text-[#337ea7]">Developer</span>
        </div>
      </div>
    </div>
  );
};

export default AboutMeHeader;
