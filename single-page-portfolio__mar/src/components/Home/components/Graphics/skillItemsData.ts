import { SkillItemData } from '../../../../types';
import DockerIcon from '../../../Icons/DockerIcon';
import NextJSIcon from '../../../Icons/NextJSIcon';
import NodeJSIcon from '../../../Icons/NodeJSIcon';
import PythonIcon from '../../../Icons/PythonIcon';
import ReactIcon from '../../../Icons/ReactIcon';
import SvelteIcon from '../../../Icons/SvelteIcon';
import TSIcon from '../../../Icons/TSIcon';


const skillItemsData: SkillItemData[] = [
    {
        name: "Docker",
        Icon: DockerIcon,
        activeColor: "#2496ED",
        website:"https://reactjs.org/"

    },
    {
        name: "Python",
        Icon: PythonIcon,
        activeColor: "#3776AB",
        website: "https://www.python.org/"
    },
    {
        name: "NextJS",
        Icon: NextJSIcon,
        activeColor: "#000000",
        website:"https://nextjs.org/"

    },
    {
        name: "NodeJS",
        Icon: NodeJSIcon,
        activeColor: "#339933",
        website:"https://nodejs.org/"

    },
    {
        name: "React",
        Icon: ReactIcon ,
        activeColor: "#61DAFB",
        website:"https://reactjs.org/"
    },
    {
        name: "Svelte",
        Icon: SvelteIcon,
        activeColor: "#FF3E00",
        website:"https://svelte.dev/"
    },
    {
        name: "TS",
        Icon: TSIcon,
        activeColor: "#3178C6",
        website:"https://www.typescriptlang.org/",
    }
]

export default skillItemsData;