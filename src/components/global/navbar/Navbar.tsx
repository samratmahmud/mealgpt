/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import NavbarButton from "./NavbarButton";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="">
      <div className="flex justify-between gap-5 items-center container py-5">
        <Logo />
        <div className="flex items-center gap-10">
          <Link href="/" className="text-xl hover:underline duration-300">
            How it Works
          </Link>
          <NavbarButton>Sign up</NavbarButton>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
