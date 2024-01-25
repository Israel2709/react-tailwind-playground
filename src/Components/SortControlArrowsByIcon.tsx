import React, { useState } from "react";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import classNames from "classnames";

interface SortControlProps {
  className?: string;
}

type SortOption = "default" | "asc" | "desc";

const SortControlArrowsByIcon: React.FC<SortControlProps> = ({ className }) => {
  const [sortOption, setSortOption] = useState<SortOption>("default");

  const handleIconClick = (event: React.MouseEvent<SVGSVGElement>) => {
    const sortingOption = event.currentTarget.dataset
      .sortingOption as SortOption;
    console.log(sortingOption);
    setSortOption((prevOption) =>
      prevOption === sortingOption ? "default" : sortingOption
    );
  };

  const iconClassnames = "text-xl text-gray-400";

  return (
    <div
      className={classNames(
        "inline-flex items-center justify-center space-x-2 p-4 border border-gray-800 rounded",
        "cursor-pointer hover:bg-gray-100",
        className
      )}
    >
      <FiArrowUp
        onClick={handleIconClick}
        data-sorting-option="asc"
        className={classNames(iconClassnames, {
          "text-blue-800": sortOption === "asc",
        })}
      />
      <FiArrowDown
        onClick={handleIconClick}
        data-sorting-option="desc"
        className={classNames(iconClassnames, {
          "text-blue-800": sortOption === "desc",
        })}
      />
    </div>
  );
};

export default SortControlArrowsByIcon;
