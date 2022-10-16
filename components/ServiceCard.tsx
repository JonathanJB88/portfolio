import { FunctionComponent } from "react";
import { IService } from "../types";

const ServiceCard: FunctionComponent<{ service: IService }> = ({
  service: { Icon, title, about },
}) => {
  const createMarkup = () => {
    return { __html: about };
  };

  return (
    <div className="flex items-center p-2 space-x-4">
      <Icon className="w-12 h-12 text-orange" />
      <div>
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()} className="text-xs" />
      </div>
    </div>
  );
};

export default ServiceCard;
