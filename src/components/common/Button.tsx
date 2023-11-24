/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  icon?: string;
  rounded?: "8" | "16";
  href?: string;
}

function Button(props: buttonProps) {
  const {
    children,
    className,
    icon,
    rounded = "8",
    href,
    disabled,
    ...rest
  } = props;

  let Btn: React.ElementType = "button";

  if (href) {
    Btn = Link;
  }

  const roundedClass =
    rounded === "8"
      ? "rounded-lg md:text-3xl text-xl"
      : "md:rounded-2xl rounded-lg md:text-3xl text-[17px]";

  return (
    <Btn
      role="button"
      className={`flex gap-4 items-center justify-center font-medium leading-normal md:py-2.5 py-[7px] px-20 bg-primary text-white btn_drop_shadow focus:scale-95 ${roundedClass} ${
        className || ""
      } ${disabled ? "opacity-30" : ""}`}
      disabled={disabled}
      {...(href ? {href} : {})}
      {...rest}
      tabIndex={-1}
    >
      <span>
        <img src={icon} alt="" />
      </span>
      <span>{children}</span>
    </Btn>
  );
}

export default Button;
