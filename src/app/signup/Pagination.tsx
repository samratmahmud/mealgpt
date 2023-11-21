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
    <div className="flex gap-5">
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
              className={`text-base lg:text-[#F8F6F6] text-[#F8F6F6]/[30%] py-0.5 px-2 bg-primary rounded-sm mr-3 ${
                isActive ? "" : "opacity-30"
              }`}
            >
              {index + 1}
            </div>
            <div
              className={`text-base font-medium leading-9 mr-4 ${
                isActive ? "" : "opacity-30"
              }`}
            >
              {name}
            </div>
            <div className="group-last:hidden">
              <img src="/images/Forward.svg" alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Pagination;
