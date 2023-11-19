import React from "react";

interface buttonProps {
  name: string;
  icon?: string;
  rounded?: "8" | "16";
}

function Buttons(props: buttonProps) {
  const {name, icon, rounded = "8"} = props;
  return (
    <div>
      <div
        role="button"
        className={`flex gap-4 items-center justify-center text-3xl font-medium leading-normal py-2.5 px-20 bg-primary text-white ${
          rounded === "8" ? "rounded-lg" : "rounded-2xl"
        }`}
      >
        <span>
          <img src={icon} alt="" />
        </span>
        {name}
      </div>
    </div>
  );
}

export default Buttons;
