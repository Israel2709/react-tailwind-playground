import React from "react";
import classNames from "classnames";

interface SortIconProps {
  active: boolean;
  icon: React.ElementType;
  handler: (sortingOption: string) => void;
  sortOption: string;
}

const SortIcon: React.FC<SortIconProps> = ({
  active,
  icon: Icon,
  handler,
  sortOption,
}) => {
  const iconClassnames = classNames("text-xl", {
    "text-gray-400": !active,
    "text-blue-800": active,
  });

  return (
    <Icon onClick={() => handler(sortOption)} className={iconClassnames} />
  );
};

export default SortIcon;
