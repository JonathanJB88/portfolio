import { IProject, IService, ISkill } from "./types";
import { RiComputerLine } from "react-icons/ri";
import {
  FaServer,
  FaChalkboardTeacher,
  FaHtml5,
  FaReact,
  FaTrello,
} from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import { DiScrum } from "react-icons/di";
import { AiOutlineApi, AiOutlineTeam } from "react-icons/ai";
import {
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoNodejs,
  IoIosChatboxes,
} from "react-icons/io";
import { BiGitBranch } from "react-icons/bi";
import { MdOutlineLeaderboard } from "react-icons/md";
import {
  SiTypescript,
  SiRedux,
  SiExpress,
  SiNextdotjs,
  SiChakraui,
  SiMaterialui,
  SiTailwindcss,
  SiPostgresql,
  SiJirasoftware,
  SiSlack,
} from "react-icons/si";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build beautiful and scalable SPAs using <b>HTML</b>, <b>CSS</b>, <b>React.js</b>, <b>Next.js</b>, <b>Tailwind CSS</b> and others",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "Handle databases, server, api using <b>Express</b> & other popular frameworks",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about:
      "A daily <b>problem solver</b>, <b>quick learner</b>, very <b>passionate about coding</b>, and love to take up challenging tasks.",
  },
  {
    Icon: DiScrum,
    title: "Scrum Master",
    about:
      "A high-quality coding service with a focus on the <b>Scrum</b> methodology",
  },
  {
    Icon: FaChalkboardTeacher,
    title: "Experienced Teacher",
    about: "A vast amount of experience in teaching and mentoring students",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about: "I can develop robust  REST API",
  },
];

export const languages: ISkill[] = [
  {
    Icon: IoLogoJavascript,
    name: "JavaScript",
    level: "85%",
  },
  {
    Icon: SiTypescript,
    name: "TypeScript",
    level: "75%",
  },
  {
    Icon: FaHtml5,
    name: "HTML5",
    level: "80%",
  },
  {
    Icon: IoLogoCss3,
    name: "CSS3",
    level: "55%",
  },
  {
    Icon: FaReact,
    name: "React.js",
    level: "80%",
  },
  {
    Icon: SiRedux,
    name: "Redux",
    level: "65%",
  },
  {
    Icon: IoLogoNodejs,
    name: "Node.js",
    level: "80%",
  },
  {
    Icon: SiExpress,
    name: "Express",
    level: "80%",
  },
  {
    Icon: SiNextdotjs,
    name: "Next.js",
    level: "85%",
  },
  {
    Icon: SiChakraui,
    name: "ChakraUI",
    level: "77%",
  },
  {
    Icon: SiMaterialui,
    name: "MaterialUI",
    level: "50%",
  },
  {
    Icon: SiTailwindcss,
    name: "Tailwind CSS",
    level: "60%",
  },
];

export const tools: ISkill[] = [
  {
    Icon: SiPostgresql,
    name: "PostgreSQL",
    level: "75%",
  },
  {
    Icon: BiGitBranch,
    name: "Git & GitHub",
    level: "95%",
  },
  {
    Icon: SiJirasoftware,
    name: "Jira",
    level: "95%",
  },
  {
    Icon: SiSlack,
    name: "Slack",
    level: "95%",
  },
  {
    Icon: FaTrello,
    name: "Trello",
    level: "95%",
  },
  {
    Icon: DiScrum,
    name: "Scrum",
    level: "90%",
  },
  {
    Icon: IoIosChatboxes,
    name: "Communication",
    level: "100%",
  },
  {
    Icon: AiOutlineTeam,
    name: "Teamwork",
    level: "100%",
  },
  {
    Icon: MdOutlineLeaderboard,
    name: "Leadership",
    level: "95%",
  },
  {
    Icon: MdLanguage,
    name: "Spanish",
    level: "100%",
  },
  {
    Icon: MdLanguage,
    name: "English",
    level: "95%",
  },
  {
    Icon: MdLanguage,
    name: "Italian",
    level: "75%",
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "Pokemon App",
    description:
      "Design and develop a Pokemon App that included: searching, filtering, sorting, creating and updating Pokemons",
    image_path: "/images/pokemon.gif",
    deployed_url: "https://pokemon-app-by-jonathanbracho.vercel.app/",
    github_url: "https://github.com/JonathanJB88/PI-Pokemon",
    category: ["JavaScript", "React", "Pure CSS"],
    key_techs: [
      "React",
      "Redux",
      "Pure CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
    ],
  },
  {
    id: 2,
    name: "World Travelers",
    description:
      "SPA where users can filter, sort, search, create and join other trips, pay through paypal or web3, comment on tourist activities and chat with other users. Admin users can create tourist activities in destination cities previously added.",
    image_path: "/images/world_travelers.gif",
    deployed_url: "https://worldtravelers-app.herokuapp.com/",
    github_url: "https://github.com/AngelPM9506/PF-SoyHenry",
    category: ["TypeScript", "React", "Next", "ChakraUI"],
    key_techs: [
      "Postgress",
      "MongoDB",
      "Socket.io",
      "Nodemailer",
      "Auth0",
      "Cloudinary",
      "ChakraUI",
      "ReactQuery",
      "Leaflet",
      "Rainbowkit",
      "Wagmi",
      "Ethers.js",
    ],
  },
  {
    id: 3,
    name: "Portfolio",
    description:
      "Portfolio web page developed with nextjs and Tailwind CSS. It includes my resume, skills and projects",
    image_path: "/images/portfolio.gif",
    deployed_url: "https://worldtravelers-app.herokuapp.com/",
    github_url: "https://github.com/JonathanJB88/portfolio",
    category: ["TypeScript", "React", "Next", "Tailwind CSS"],
    key_techs: [
      "React",
      "Next",
      "Tailwind CSS",
      "Framer Motion",
      "React Icons",
    ],
  },
];
