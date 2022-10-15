import { FunctionComponent } from "react";
import Link from "next/link";

const NavItem: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, setActiveItem, name, route }) => {
  return activeItem !== name ? (
    <Link href={route}>
      <a>
        <span onClick={() => setActiveItem(name)} className="hover:text-orange">
          {name}
        </span>
      </a>
    </Link>
  ) : null;
};

export default NavItem;
