import { SocialMediaData } from "../../../../types";
import DribbleIcon from "../../../Icons/DribbleIcon";
import GithubIcon from "../../../Icons/GithubIcon";
import GmailIcon from "../../../Icons/GmailIcon";
import LinkedInIcon from "../../../Icons/LinkedInIcon";
import TwitterIcon from "../../../Icons/TwitterIcon";

const socialMediaBarIcons: SocialMediaData[] = [
  {
    name: "Github",
    Icon: GithubIcon,
    website: "https://github.com/deepaktammali",
    activeColor: "#181717",
  },
  {
    name: "Twitter",
    Icon: TwitterIcon,
    website: "https://twitter.com/explore",
    activeColor: "#1DA1F2",
  },
  {
    name: "Gmail",
    Icon: GmailIcon,
    website: "mailto:deepak.tammali627@gmail.com",
    activeColor: "#EA4335",
  },
  {
    name: "LinkedIn",
    Icon: LinkedInIcon,
    website: "https://www.linkedin.com/in/tammalideepak/",
    activeColor: "#0A66C2",
  },
  {
    name: "Dribble",
    Icon: DribbleIcon,
    website: "https://dribbble.com/shots/popular/web-design",
    activeColor: "#EA4C89",
  },
];

export default socialMediaBarIcons;
