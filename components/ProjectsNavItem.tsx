import { FunctionComponent } from 'react';
import { Category } from '../types';

const ProjectsNavItem: FunctionComponent<{
  value: Category | 'All';
  handleCategory: Function;
  active: string;
}> = ({ value, handleCategory, active }) => {
  let className = 'text-xs cursor-pointer hover:text-orange lg:text-base';
  if (active === value) className += ' text-orange';

  return (
    <li className={className} onClick={() => handleCategory(value)}>
      {value}
    </li>
  );
};

export default ProjectsNavItem;
