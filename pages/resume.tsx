import Link from 'next/link';
import { languages, tools } from '../data';
import Bar from '../components/Bar';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation } from '../animations';
import { NextPage } from 'next';
import Head from 'next/head';

const Resume: NextPage = () => {
  const { master, degree } = {
    degree: `Bachelor's Degree in Mathematics and Physics Education`,
    master: `Master's Degree in Educational Administration`,
  };

  return (
    <motion.div
      className="px-6 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>
          Jonathan Bracho | Frontend - Full Stack Web Developer | Resume
        </title>
        <meta
          name="description"
          content="Frontend | Full Stack Developer looking for a job, open to work"
        />
        <meta
          name="keywords"
          content="Frontend - Full Stack Web Developer, JavaScript, TypeScript, React, Redux, Node.js, Express.js, Redux-toolkit, Cypress, Jest, Next.js"
        />
      </Head>
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-lg font-bold">Full Stack Web Developer</h5>
            <p className="my-3">Henry | 2019</p>
            <h5 className="my-2 text-lg font-bold">{master}</h5>
            <p className="my-3">
              Universidad Rafael María Baralt, Venezuela | 2017
            </p>
            <h5 className="my-2 text-lg font-bold">{degree}</h5>
            <p className="my-3">University of Zulia, Venezuela | 2011</p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-xl font-bold">Recent Experience</h5>
          <div>
            <h5 className="my-2 text-lg font-bold">Frontend Developer</h5>
            <p className="my-3">BlustFunnels | January 2021 - November 2022</p>
            <p className="my-3 text-base text-justify">
              {`I developed and maintained the company's website and web-based
              applications using my expertise in React, TypeScript, and unit
              testing with Jest. I was a useful member of the team and
              contributed to the success of the business thanks to my knowledge
              in web development and my capacity for writing clean, effective
              code.`}
              <a
                href="\assets\Frontend-FullStack-Developer_Jonathan_Bracho_CV.pdf"
                download="Frontend-FullStack-Developer_Jonathan_Bracho_CV.pdf"
                aria-label="Resume"
              >
                <span className="hover:text-orange">
                  {` Please download my resume to view more.`}
                </span>
              </a>
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
