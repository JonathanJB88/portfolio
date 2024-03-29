import { IProject, IService, ISkill } from './types';
import { RiComputerLine } from 'react-icons/ri';
import { FaServer, FaChalkboardTeacher, FaReact, FaTrello, FaMobileAlt } from 'react-icons/fa';
import { MdDeveloperMode } from 'react-icons/md';
import { MdLanguage } from 'react-icons/md';
import { DiScrum } from 'react-icons/di';
import { AiOutlineTeam } from 'react-icons/ai';
import { IoLogoJavascript, IoLogoNodejs, IoIosChatboxes } from 'react-icons/io';
import { BiGitBranch, BiTestTube } from 'react-icons/bi';
import { MdOutlineLeaderboard } from 'react-icons/md';
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
  SiJest,
  SiCypress,
  SiMongodb,
} from 'react-icons/si';

export const aboutSection: string = `I am a highly skilled and experienced Frontend Developer with over 2
years of experience in developing with React and TypeScript. Proficient
in coding unit tests with Jest, using Scrum for agile methodologies &
Git and GitHub for version control. Strong background in problem
solving, strategic planning and team leadership. I hold multiple
certifications in React, TypeScript, and Web Development. I hold a
Bachelor's degree in Math and Physics Education, a Master's degree in
Business Administration and Management, and a Full Stack Developer
certification. I'm fluent in English and Spanish, with an EF SET English
Certificate (C2 Proficient) and experience as a bilingual teacher.
Strongly committed to continuous learning and professional development.`;

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about:
      'I can build beautiful and scalable SPAs using <b>React</b> + <b>TypeScript</b>, <b>Redux-toolkit</b>, <b>Next.js</b>, <b>Tailwind CSS</b> and others.',
  },
  {
    Icon: BiTestTube,
    title: 'e2e Testing & Unit Tests',
    about:
      'I am able to create e2e tests using <b>Cypress</b> and unit tests using <b>Jest & React Testing Library</b>.',
  },
  {
    Icon: FaMobileAlt,
    title: 'Mobile Application Development',
    about:
      'I can develop beautiful and scalable mobile applications for <b>iOS</b> and <b>Android</b> using <b>React Native</b>.',
  },
  {
    Icon: FaServer,
    title: 'Backend  Development',
    about: 'Handle databases, server, api using <b>Express.js</b> & other popular frameworks.',
  },
  {
    Icon: MdDeveloperMode,
    title: 'Competitive Coder',
    about:
      'A daily <b>problem solver</b>, <b>quick learner</b>, very <b>passionate about coding</b>, and love to take up challenging tasks.',
  },
  {
    Icon: DiScrum,
    title: 'Scrum Master',
    about: 'A high-quality coding service with a focus on the <b>Scrum</b> methodology.',
  },
  {
    Icon: FaChalkboardTeacher,
    title: 'Experienced Teacher',
    about: 'A vast amount of experience in teaching and mentoring students.',
  },
];

export const languages: ISkill[] = [
  {
    Icon: SiTypescript,
    name: 'TypeScript',
    level: '87%',
  },
  {
    Icon: FaReact,
    name: 'React.js',
    level: '89%',
  },
  {
    Icon: FaReact,
    name: 'React Native',
    level: '85%',
  },
  {
    Icon: SiRedux,
    name: 'Redux & Redux Toolkit',
    level: '92%',
  },
  {
    Icon: SiNextdotjs,
    name: 'Next.js',
    level: '89%',
  },
  {
    Icon: SiCypress,
    name: 'Cypress',
    level: '85%',
  },
  {
    Icon: SiJest,
    name: 'Jest',
    level: '82%',
  },
  {
    Icon: SiTailwindcss,
    name: 'Tailwind CSS',
    level: '82%',
  },
  {
    Icon: SiChakraui,
    name: 'ChakraUI',
    level: '77%',
  },
  {
    Icon: SiMaterialui,
    name: 'MaterialUI',
    level: '50%',
  },
  {
    Icon: IoLogoNodejs,
    name: 'Node.js',
    level: '93%',
  },
  {
    Icon: SiExpress,
    name: 'Express',
    level: '90%',
  },
  {
    Icon: IoLogoJavascript,
    name: 'JavaScript',
    level: '95%',
  },
];

export const tools: ISkill[] = [
  {
    Icon: BiGitBranch,
    name: 'Git & GitHub',
    level: '95%',
  },
  {
    Icon: DiScrum,
    name: 'Scrum',
    level: '90%',
  },
  {
    Icon: SiJirasoftware,
    name: 'Jira',
    level: '85%',
  },
  {
    Icon: FaTrello,
    name: 'Trello',
    level: '95%',
  },
  {
    Icon: SiMongodb,
    name: 'MongoDB',
    level: '91%',
  },
  {
    Icon: SiPostgresql,
    name: 'PostgreSQL',
    level: '75%',
  },
  {
    Icon: IoIosChatboxes,
    name: 'Communication',
    level: '100%',
  },
  {
    Icon: AiOutlineTeam,
    name: 'Teamwork',
    level: '100%',
  },
  {
    Icon: MdOutlineLeaderboard,
    name: 'Leadership',
    level: '95%',
  },
  {
    Icon: MdLanguage,
    name: 'Spanish',
    level: '100%',
  },
  {
    Icon: MdLanguage,
    name: 'English',
    level: '95%',
  },
  {
    Icon: MdLanguage,
    name: 'Italian',
    level: '55%',
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: 'Física Fácil',
    description:
      'Física Fácil is a web app for solving physics problems using AI. Built with React, TypeScript, and TailwindCSS, it offers a user-friendly interface, supports various education levels, and is responsive across devices, making physics learning accessible and engaging for all students. 🎓💡',
    image_path: '/images/fisicafacil.gif',
    deployed_url: 'https://fisicafacil.vercel.app/',
    github_url: 'https://github.com/JonathanJB88/AIEasyPhysics',
    category: ['TypeScript', 'React', 'Tailwind CSS'],
    key_techs: ['React', 'Typescript', 'Tailwind CSS', 'Framer Motion', 'React-hot-toast'],
  },
  {
    id: 2,
    name: 'Portfolio',
    description:
      'Portfolio web page developed with Next.js and TailwindCSS. It includes my resume, skills and projects.',
    image_path: '/images/portfolio.gif',
    deployed_url: 'https://jonathanbrachoportfolio.vercel.app/',
    github_url: 'https://github.com/JonathanJB88/portfolio',
    category: ['TypeScript', 'React', 'Next', 'Tailwind CSS'],
    key_techs: ['React', 'Next', 'Tailwind CSS', 'Framer Motion', 'React Icons'],
  },
  {
    id: 3,
    name: 'My Custom Hooks',
    description: 'React + Typescript were used to create my custom hooks.',
    image_path: '/images/my-custom-hooks-typescript.gif',
    deployed_url: 'https://github.com/JonathanJB88/My-Custom-Hooks_Typescript',
    github_url: 'https://github.com/JonathanJB88/My-Custom-Hooks_Typescript',
    category: ['TypeScript', 'React'],
    key_techs: ['React', 'TypeScript', 'Vite'],
  },
  {
    id: 4,
    name: 'Maps App',
    description: 'To improve my knowledge of React and Typescript, I developed this map application.',
    image_path: '/images/maps-app.gif',
    deployed_url: 'https://jonathandev-mapsapp.netlify.app/',
    github_url: 'https://github.com/JonathanJB88/Maps-App',
    category: ['TypeScript', 'React', 'CSS3'],
    key_techs: ['React', 'TypeScript', 'Vite', 'Jest', 'Css', 'Mapbox', 'React Testing Library'],
  },
  {
    id: 5,
    name: 'Calendar App',
    description: `This React-based calendar application was created. The project's goal is to improve the front-end developer's React expertise.`,
    image_path: '/images/calendar-app.gif',
    deployed_url: 'https://jonathandev-calendar-app.netlify.app/',
    github_url: 'https://github.com/JonathanJB88/CalendarApp_Frontend-React',
    category: ['JavaScript', 'React', 'CSS3'],
    key_techs: ['React', 'JavaScript', 'Vite', 'Jest', 'Css', 'React Testing Library'],
  },
  {
    id: 6,
    name: 'jon-productcard-component',
    description:
      'Providing reusable components for the open-source community, like this one made with TypeScript and React.',
    image_path: '/images/jon-productcard-component.gif',
    deployed_url: 'https://www.npmjs.com/package/jon-productcard-component',
    github_url: 'https://github.com/JonathanJB88/jon-productcard-component',
    category: ['TypeScript', 'React', 'CSS3'],
    key_techs: ['React', 'TypeScript', 'CSS3'],
  },
  {
    id: 7,
    name: 'Pokemon App',
    description:
      'Design and develop a Pokemon App that included: searching, filtering, sorting, creating and updating Pokemons.',
    image_path: '/images/pokemon.gif',
    deployed_url: 'https://pokemon-app-by-jonathanbracho.vercel.app/',
    github_url: 'https://github.com/JonathanJB88/PI-Pokemon',
    category: ['JavaScript', 'React', 'CSS3'],
    key_techs: ['React', 'Redux', 'CSS3', 'Node.js', 'Express', 'PostgreSQL'],
  },
  {
    id: 8,
    name: 'World Travelers',
    description:
      'SPA where users can filter, sort, search, create and join other trips, pay through paypal or web3, comment on tourist activities and chat with other users. Admin users can create tourist activities in destination cities previously added.',
    image_path: '/images/world_travelers.gif',
    deployed_url: 'https://world-travelers-production.up.railway.app/',
    github_url: 'https://github.com/AngelPM9506/PF-SoyHenry',
    category: ['TypeScript', 'React', 'Next', 'ChakraUI'],
    key_techs: [
      'Postgress',
      'MongoDB',
      'Socket.io',
      'Nodemailer',
      'Auth0',
      'Cloudinary',
      'ChakraUI',
      'ReactQuery',
      'Leaflet',
      'Rainbowkit',
      'Wagmi',
      'Ethers.js',
    ],
  },
  {
    id: 9,
    name: 'Calculator App',
    description: 'Simple Calculator App developed with React Native + Typescript, for iOS and Android',
    image_path: '/images/calculator.gif',
    deployed_url: 'https://drive.google.com/file/d/1pRb-u9kmI1Hn7l_912FhVt3tLHUleJJr/view',
    github_url: 'https://github.com/JonathanJB88/Calculator-ReactNative',
    category: ['TypeScript', 'React Native', 'CSS3'],
    key_techs: ['React Native', 'TypeScript'],
  },
  {
    id: 10,
    name: 'Movies App',
    description: 'Movies App developed with React Native + Typescript, for iOS and Android.',
    image_path: '/images/movies.gif',
    deployed_url: 'https://drive.google.com/file/d/1s3o437uFC_lKef53EPjyLEwKSM96kxrO/view',
    github_url: 'https://github.com/JonathanJB88/MoviesApp-reactNative',
    category: ['TypeScript', 'React Native', 'CSS3'],
    key_techs: ['React Native', 'TypeScript'],
  },
  {
    id: 11,
    name: 'Pokedex App',
    description:
      'Pokedex App developed with React Native + Typescript, for iOS and Android. Details and search by name or id is available.',
    image_path: '/images/pokedex.gif',
    deployed_url: 'https://drive.google.com/file/d/19U2myC_swNI4gOiS67__Ih96P3FCRRdW/view',
    github_url: 'https://github.com/JonathanJB88/PokedexApp',
    category: ['TypeScript', 'React Native', 'CSS3'],
    key_techs: ['React Native', 'TypeScript'],
  },
  {
    id: 12,
    name: 'Routes App',
    description: 'Routes App developed with React Native + Typescript, for iOS and Android.',
    image_path: '/images/routes.gif',
    deployed_url: 'https://drive.google.com/file/d/1phkcH9OlQdZ6bfwIZq2_MkPwMVj-08TI/view',
    github_url: 'https://github.com/JonathanJB88/MapsApp-ReactNative',
    category: ['TypeScript', 'React Native', 'CSS3'],
    key_techs: ['React Native', 'TypeScript'],
  },
  {
    id: 13,
    name: 'Products App',
    description:
      'Products App developed with React Native + Typescript, for iOS and Android. Functionalities: User login and register, add and delete products (only admin user), access to camera and gallery to add product pictures.',
    image_path: '/images/products.gif',
    deployed_url: 'https://drive.google.com/file/d/1YUeCUpUja6gz1W6sbVjlfxH3_18_HDtf/view',
    github_url: 'https://github.com/JonathanJB88/ProductsApp',
    category: ['TypeScript', 'React Native', 'CSS3'],
    key_techs: ['React Native', 'TypeScript', 'MongoDB', 'Cloudinary'],
  },
];
