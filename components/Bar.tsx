import { FunctionComponent } from "react";
import { ISkill } from "../types";
import { Variants, motion } from "framer-motion";

const Bar: FunctionComponent<{ data: ISkill }> = ({
  data: { Icon, name, level },
}) => {
  const bar_width = `${level}`;

  const variants: Variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: bar_width,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 120,
      },
    },
  };

  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-200">
      <motion.div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-orange to-orange-400"
        style={{ width: bar_width }}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  );
};

export default Bar;
