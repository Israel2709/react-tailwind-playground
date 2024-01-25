import React, { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import classNames from "classnames";

interface SortControlChevronProps {
  className?: string;
}

type SortOption = "default" | "asc" | "desc";

const SortControlChevronByIcon: React.FC<SortControlChevronProps> = ({
  className,
}) => {
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
        "inline-flex flex-col items-center justify-center space-y-2 p-4 border border-gray-800 rounded",
        "cursor-pointer hover:bg-gray-100",
        className
      )}
    >
      <FiChevronUp
        onClick={handleIconClick}
        data-sorting-option="asc"
        className={classNames(iconClassnames, {
          "text-blue-800": sortOption === "asc",
        })}
      />
      <FiChevronDown
        onClick={handleIconClick}
        data-sorting-option="desc"
        className={classNames(iconClassnames, {
          "text-blue-800": sortOption === "desc",
        })}
      />
    </div>
  );
};

export default SortControlChevronByIcon;
