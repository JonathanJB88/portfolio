import { IService, ISkill } from "./type";
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
