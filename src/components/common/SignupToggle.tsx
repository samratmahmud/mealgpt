import React from "react";

interface toggleProps {
  number: number;
  title: string;
  isActive?: boolean;
  handelClick?: () => void;
}

function SignupToggle(props: toggleProps) {
  const {number, title, isActive, handelClick} = props;
  return (
    <div className="flex items-center" onClick={handelClick}>
      <div
        className={`text-base lg:text-[#F8F6F6] text-[#F8F6F6]/[30%] py-0.5 px-2 bg-primary rounded-sm mr-3 ${
          isActive ? "" : "opacity-30"
        }`}
      >
        {number}
      </div>
      <div
        className={`text-base font-medium leading-9 mr-4 ${
          isActive ? "" : "opacity-30"
        }`}
      >
        {title}
      </div>
      <div>
        <img src="/images/Forward.svg" alt="" />
      </div>
    </div>
  );
}

export default SignupToggle;
