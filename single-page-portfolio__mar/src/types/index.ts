import { SVGProps } from "react";

type IconData = {
    name: string;
    Icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => JSX.Element,
    activeColor: string
}

type SkillItemData = IconData & {
    website: string
}

type SocialMediaData = IconData & {
    website: string
}


export type {SkillItemData, SocialMediaData};