import { GetServerSideProps, NextPage } from 'next';
import { services, aboutSection } from '../data';
import ServiceCard from '../components/ServiceCard';
import { motion } from 'framer-motion';
import { fadeInUp, stagger, routeAnimation } from '../animations';
import Head from 'next/head';

const About: NextPage = () => {
  return (
    <motion.div
      className='flex flex-col flex-grow px-6 pt-1'
      variants={routeAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <Head>
        <title>Jonathan Bracho | Frontend - Full Stack Web Developer | Portfolio</title>
        <meta name='description' content='Frontend | Full Stack Developer looking for a job, open to work' />
        <meta
          name='keywords'
          content='Frontend - Full Stack Web Developer, JavaScript, TypeScript, React, Redux, Node.js, Express.js, Redux-toolkit, Cypress, Jest, Next.js'
        />
      </Head>
      <h5 className='my-3 text-sm font-medium text-justify'>{aboutSection}</h5>
      <div
        className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100'
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h6 className='my-3 text-xl font-bold tracking-wide'>What I am good at</h6>
        <motion.div className='grid gap-6 my-3 md:grid-cols-2' variants={stagger} initial='initial' animate='animate'>
          {services.map((service, index) => (
            <motion.div
              className='col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1'
              key={service.title + index}
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
  const endpoint = process.env.VERCEL_URL || 'http://localhost:3000';
  const res = await fetch(`${endpoint}/api/services`);
  const data = await res.json();
  return {
    props: { services: data },
  };
};
