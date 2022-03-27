interface AboutMeBodyProps {}

const AboutMeBody = ({}: AboutMeBodyProps) => {
  return (
    <div className="py-4 text-2xl">
      I like to build{" "}
      <span className="text-[#d18148] font-semibold">beautiful</span>{" "}
      experiences for users through user interface and software architecture.
    </div>
  );
};

export default AboutMeBody;
