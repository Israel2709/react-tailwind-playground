import React, { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import classNames from "classnames";
import SortIcon from "./SortIcon"; // Asegúrate de importar el nuevo componente SortIcon

interface SortControlChevronProps {
  className?: string;
}

const SortControlChevronByIcon: React.FC<SortControlChevronProps> = ({
  className,
}) => {
  const [sortOption, setSortOption] = useState("default");

  const handleIconClick = (newSortingOption: string) => {
    console.log(newSortingOption);
    setSortOption(
      sortOption !== newSortingOption ? newSortingOption : "default"
    );
  };

  return (
    <div
      className={classNames(
        "inline-flex flex-col items-center justify-center space-y-2 p-4 border border-gray-800 rounded",
        "cursor-pointer hover:bg-gray-100",
        className
      )}
    >
      <SortIcon
        active={sortOption === "asc"}
        icon={FiChevronUp}
        handler={handleIconClick}
        sortOption="asc"
      />
      <SortIcon
        active={sortOption === "desc"}
        icon={FiChevronDown}
        handler={handleIconClick}
        sortOption="desc"
      />
    </div>
  );
};

export default SortControlChevronByIcon;
