import React, { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import classNames from "classnames";

interface SortControlChevronProps {
  className?: string;
}

const SortControlChevron: React.FC<SortControlChevronProps> = ({
  className,
}) => {
  const [sortOption, setSortOption] = useState("default");

  const handleClick = () => {
    setSortOption((prevOption) => {
      switch (prevOption) {
        case "default":
          return "asc";
        case "asc":
          return "desc";
        case "desc":
          return "default";
        default:
          return "default";
      }
    });
  };

  const iconClassnames = "text-xl text-gray-400";

  return (
    <div
      onClick={handleClick}
      className={classNames(
        "inline-flex flex-col items-center justify-center space-y-2 p-4 border border-gray-800 rounded",
        "cursor-pointer hover:bg-gray-100",
        className
      )}
    >
      <FiChevronUp
        className={classNames(iconClassnames, {
          "text-blue-800": sortOption === "asc",
        })}
      />
      <FiChevronDown
        className={classNames(iconClassnames, {
          "text-blue-800": sortOption === "desc",
        })}
      />
    </div>
  );
};

export default SortControlChevron;
