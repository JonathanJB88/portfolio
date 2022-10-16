import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavBar from "../components/ProjectsNavBar";
import { projects as projectsData } from "../data";
import { Category } from "../types";
import { motion } from "framer-motion";
import { stagger, fadeInUp, routeAnimation } from "../animations";
import { NextPage } from "next";
import Head from "next/head";

const Projects: NextPage = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("All");
  const [showDetail, setShowDetail] = useState<number | null>(null);

  const handleCategory = (category: Category | "All") => {
    if (category === "All") {
      setProjects(projectsData);
      setActive(category);
      return;
    }
    const filteredProjects = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(filteredProjects);
    setActive(category);
  };

  return (
    <motion.div
      className="px-5 py-2 overflow-y-scroll lg:overflow-y-hidden"
      style={{ height: "65vh" }}
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Jonathan Bracho | Full Stack Web Developer | Projects</title>
        <meta
          name="description"
          content="Full Stack Developer looking for a job, open to work"
        />
        <meta
          name="keywords"
          content="Full Stack Web Developer, JavaScript, TypeScript, React, Redux, Node.js, Express, PostgreSQL, Next.js"
        />
      </Head>
      <ProjectsNavBar handleCategory={handleCategory} active={active} />
      <motion.div
        className="relative grid grid-cols-12 gap-4 my-3"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {projects.map((project) => (
          <motion.div
            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
            variants={fadeInUp}
            key={project.name}
          >
            <ProjectCard
              project={project}
              showDetail={showDetail}
              setShowDetail={setShowDetail}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
