import React from "react";

interface buttonProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  name: string;
  icon?: string;
  rounded?: "8" | "16";
}

function Buttons(props: buttonProps) {
  const {name, icon, rounded = "8", ...rest} = props;
  return (
    <div
      role="button"
      className={`flex gap-4 items-center justify-center text-3xl font-medium leading-normal py-2.5 px-20 bg-primary text-white btn_drop_shadow ${
        rounded === "8" ? "rounded-lg" : "rounded-2xl"
      }`}
      {...rest}
    >
      <span>
        <img src={icon} alt="" />
      </span>
      <span>{name}</span>
    </div>
  );
}

export default Buttons;
