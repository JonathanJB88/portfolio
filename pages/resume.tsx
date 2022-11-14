import Link from "next/link";
import { languages, tools } from "../data";
import Bar from "../components/Bar";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../animations";
import { NextPage } from "next";
import Head from "next/head";

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
      <Head>
        <title>Jonathan Bracho | Full Stack Web Developer | Resume</title>
        <meta
          name="description"
          content="Full Stack Developer looking for a job, open to work"
        />
        <meta
          name="keywords"
          content="Full Stack Web Developer, JavaScript, TypeScript, React, Redux, Node.js, Express, PostgreSQL, Next.js"
        />
      </Head>
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-lg font-bold">Full Stack Developer</h5>
            <p className="my-3">Henry | September 2021</p>
            <h5 className="my-2 text-lg font-bold">
              Master in Educational Administration
            </h5>
            <p className="my-3">
              Universidad Rafael María Baralt, Venezuela | September 2017
            </p>
            <h5 className="my-2 text-lg font-bold">{profession}</h5>
            <p className="my-3">University of Zulia, Venezuela. | 2011</p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-lg font-bold">
              Frontend | Full Stack Developer
            </h5>
            <p className="my-3">
              Four Tools Languages Academy | November 2021 - October 2022
            </p>
            <p className="my-3 text-base text-justify">
              {`The tool was originally an Airtable database used to manage
              educational program sales and enrollments, but the company's rapid
              growth required it to become a more robust system. It was then
              redeveloped using the MERN stack, with Next.js + Typescript. The
              technology stack for the frontend was made up of react / next.js,
              typescript, redux toolkit, MaterialUI.`}
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
