import Link from "next/link";
import React, {ReactNode} from "react";

interface NavbarButtonProps {
  children?: ReactNode;
}

function NavbarButton(props: NavbarButtonProps) {
  const {children} = props;

  return (
    <Link
      href="/signup"
      className="text-xl font-medium text-white bg-primary py-[3px] px-10 rounded-md leading-normal btn_drop_shadow"
    >
      {children}
    </Link>
  );
}

export default NavbarButton;
