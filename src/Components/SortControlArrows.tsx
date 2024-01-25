import React, { useState } from "react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import classNames from "classnames";

interface SortControlChevronProps {
  className?: string;
}

const SortControlArrows: React.FC<SortControlChevronProps> = ({
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

  const iconClassnames = classNames("text-xl", {
    "text-gray-400": sortOption === "default",
    "text-blue-400": sortOption !== "default",
  });

  return (
    <div
      onClick={handleClick}
      className={classNames(
        "inline-flex items-center justify-center space-x-2 p-4 border border-gray-800 rounded",
        "cursor-pointer hover:bg-gray-100",
        className
      )}
    >
      <FiArrowUp className={iconClassnames} />
      <FiArrowDown className={iconClassnames} />
    </div>
  );
};

export default SortControlArrows;
