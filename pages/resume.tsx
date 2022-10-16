import Link from "next/link";
import { languages, tools } from "../data";
import Bar from "../components/Bar";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../animations";
import { NextPage } from "next";

const Resume: NextPage = () => {
  const profession = `Bachelor's Degree in Mathematics and Physics Education`;
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-lg font-bold">Full Stack Developer</h5>
            <p className="my-3">Henry | September 2022</p>
            <h5 className="my-2 text-lg font-bold">{profession}</h5>
            <p className="my-3">University of Zulia, Venezuela. | 2011</p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-lg font-bold">Full Stack Developer</h5>
            <p className="my-3">Henry | October 2022</p>
            <p className="my-3 text-base text-justify">
              World Travelers I was part of the team of developers in charge of
              the design and development of a SPA using Next.js and Typescript.
              <Link href="/projects">
                <a>
                  <span className="hover:text-orange">
                    {" "}
                    See more in the project section.
                  </span>
                </a>
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-xl font-bold">
            Tools, Softwares & Soft Skills
          </h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
