import { FunctionComponent } from "react";
import ProjectsNavItem from "./ProjectsNavItem";

const ProjectsNavBar: FunctionComponent<{
  handleCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 list-none overflox-x-auto">
      <ProjectsNavItem value={"All"} {...props} />
      <ProjectsNavItem value={"JavaScript"} {...props} />
      <ProjectsNavItem value={"TypeScript"} {...props} />
      <ProjectsNavItem value={"React"} {...props} />
      <ProjectsNavItem value={"Next"} {...props} />
      <ProjectsNavItem value={"Pure CSS"} {...props} />
      <ProjectsNavItem value={"ChakraUI"} {...props} />
      <ProjectsNavItem value={"Tailwind CSS"} {...props} />
    </div>
  );
};

export default ProjectsNavBar;
