import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FaFileDownload } from "react-icons/fa";
import { SiGmail, SiWhatsapp } from "react-icons/si";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FunctionComponent } from "react";

const Sidebar: FunctionComponent = () => {
  const profPicUrl =
    "https://drive.google.com/uc?id=1j-TrcWFOymG5R3vI3H1So13Tszm3-a50";

  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Image
        width={200}
        height={200}
        quality={100}
        className="mx-auto rounded-full"
        src={profPicUrl}
        alt="Jonathan Profile Picture"
      />
      <h3 className="my-4 text-2xl font-medium tracking-wider font-kaushan">
        <span className="text-orange">Jonathan </span>Bracho
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Full Stack Web Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
        href="/assets/Jonathan_Bracho_Resume.pdf"
        download="Jonathan_Bracho_Resume.pdf"
      >
        <FaFileDownload className="w-4 h-4 mx-1 text-orange" /> Download Resume
      </a>
      <div className="flex justify-center w-9/12 mx-auto my-5 text-orange md:w-full">
        <a
          href="https://www.linkedin.com/in/jonathanbracho/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="w-8 h-8 mx-2 cursor-pointer" />
        </a>
        <a
          href="https://github.com/JonathanJB88"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="w-8 h-8 mx-2 cursor-pointer" />
        </a>
      </div>
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Madrid, Spain</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <SiGmail />
          <span>Jonajes0288@gmail.com</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <SiWhatsapp />
          <span>+34652540974</span>
        </div>
      </div>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full shadow-md bg-gradient-to-r from-orange to-orange-400 focus:outline-none"
        onClick={() => window.open("mailto:Jonajes0288@gmail.com")}
      >
        Email Me
      </button>
      {theme === "light" ? (
        <button
          className="w-8/12 px-5 py-2 my-2 text-white rounded-full shadow-md bg-gradient-to-r from-orange to-orange-400 focus:outline-none"
          onClick={changeTheme}
        >
          Dark Mode
        </button>
      ) : (
        <button
          className="w-8/12 px-5 py-2 my-2 text-white rounded-full shadow-md bg-gradient-to-r from-orange to-orange-400 focus:outline-none"
          onClick={changeTheme}
        >
          Light Mode
        </button>
      )}
    </>
  );
};

export default Sidebar;
