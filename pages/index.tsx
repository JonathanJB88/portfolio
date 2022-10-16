import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import { services } from "../data";
import ServiceCard from "../components/ServiceCard";
import { motion } from "framer-motion";
import { fadeInUp, stagger, routeAnimation } from "../animations";
import Head from "next/head";

const About: NextPage = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Jonathan Bracho | Full Stack Web Developer | Portfolio</title>
        <meta
          name="description"
          content="Full Stack Developer looking for a job, open to work"
        />
        <meta
          name="keywords"
          content="Full Stack Web Developer, JavaScript, TypeScript, React, Redux, Node.js, Express, PostgreSQL, Next.js"
        />
      </Head>
      <h5 className="my-3 text-sm font-medium text-justify">
        I am a Full Stack Developer with a wide range of skills and knowledge
        that allow me to develop and maintain web applications. I am comfortable
        working with both front-end and back-end technologies, and have a strong
        understanding of how the two work together. My background in teaching
        means that I am able to effectively communicate with people from all
        walks of life, I believe that this makes me a better developer, as I am
        always looking to improve my skills.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">
          What I am good at
        </h6>
        <motion.div
          className="grid gap-6 my-3 md:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service, index) => (
            <motion.div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1"
              key={index}
              variants={fadeInUp}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;

export const getServerSideProps: GetServerSideProps = async () => {
  // const res = await fetch(`${process.env.VERCEL_URL}/api/services`);
  // const data = await res.json();
  return {
    props: { endpoint: process.env.VERCEL_URL },
  };
};

// export const getStaticProps: GetStaticProps = async (
//   context: GetStaticPropsContext
// ) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();
//   return {
//     props: { services: data },
//   };
// };
