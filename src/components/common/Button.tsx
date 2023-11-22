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

  return (
    <Btn
      role="button"
      className={`flex gap-4 items-center justify-center md:text-3xl text-xl font-medium leading-normal md:py-2.5 py-[7px] px-20 bg-primary text-white btn_drop_shadow ${
        rounded === "8" ? "rounded-lg" : "rounded-2xl"
      } ${className || ""} ${disabled ? "opacity-30" : ""}`}
      disabled={disabled}
      {...(href ? {href} : {})}
      {...rest}
    >
      <span>
        <img src={icon} alt="" />
      </span>
      <span>{children}</span>
    </Btn>
  );
}

export default Button;
