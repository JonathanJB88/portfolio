import { FunctionComponent } from 'react';
import ProjectsNavItem from './ProjectsNavItem';

const ProjectsNavBar: FunctionComponent<{
  handleCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex flex-wrap px-3 py-2 space-x-3 overflow-x-auto list-none sm:flex-nowrap">
      <ProjectsNavItem value={'All'} {...props} />
      <ProjectsNavItem value={'TypeScript'} {...props} />
      <ProjectsNavItem value={'React'} {...props} />
      <ProjectsNavItem value={'Next'} {...props} />
      <ProjectsNavItem value={'JavaScript'} {...props} />
      <ProjectsNavItem value={'Tailwind CSS'} {...props} />
      <ProjectsNavItem value={'ChakraUI'} {...props} />
      <ProjectsNavItem value={'CSS3'} {...props} />
    </div>
  );
};

export default ProjectsNavBar;
