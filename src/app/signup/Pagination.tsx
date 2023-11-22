/* eslint-disable @next/next/no-img-element */
import React from "react";

interface PaginationProps {
  setCurrentPage: (page: number) => void;
  currentPage: number;
  tabs: string[];
}

function Pagination(props: PaginationProps) {
  const {currentPage, setCurrentPage, tabs} = props;

  return (
    <div className="flex sm:gap-5 gap-3">
      {tabs.map((name, index) => {
        const isActive = currentPage === index;

        return (
          <div
            key={name}
            role="button"
            onClick={() => currentPage > index && setCurrentPage(index)}
            className="flex items-center group"
          >
            <div
              className={`sm:text-base text-[10px] lg:text-[#F8F6F6] text-[#F8F6F6]/[30%] py-0.5 sm:px-2 px-1 bg-primary rounded-sm md:mr-3 mr-1.5 ${
                isActive ? "" : "opacity-30"
              }`}
            >
              {index + 1}
            </div>
            <div
              className={`sm:text-base text-[10px] font-medium leading-9 sm:mr-4 mr-2 whitespace-nowrap ${
                isActive ? "" : "opacity-30"
              }`}
            >
              {name}
            </div>
            <div className="group-last:hidden flex-shrink-0">
              <img src="/images/Forward.svg" alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Pagination;
