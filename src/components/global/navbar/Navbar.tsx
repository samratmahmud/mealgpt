/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, {useState} from "react";
import NavbarButton from "./NavbarButton";
import Logo from "./Logo";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  let toggle = () => setOpen((prev) => !prev);

  return (
    <nav className="">
      <div className="flex justify-between gap-5 items-center container py-5 mb-7 lg:mb-0">
        <Logo />
        <div className="hidden md:block">
          <div className="flex items-center gap-10">
            <Link href="/" className="text-xl hover:underline duration-300">
              How it Works
            </Link>
            <NavbarButton>Sign up</NavbarButton>
          </div>
        </div>
        <div className="md:hidden cursor-pointer" onClick={toggle}>
          <img src="/images/Menu.svg" alt="" />
        </div>
      </div>
      <div className="md:hidden">
        <Drawer open={open} onClose={toggle} direction="left">
          <div className="flex flex-col justify-between p-5 pt-12 h-full">
            <div className="flex flex-col items-center gap-10">
              <Link href="/" className="text-xl hover:underline duration-300">
                How it Works
              </Link>
              <NavbarButton>Sign up</NavbarButton>
            </div>
            <div className="text-[8px] text-center tracking-[0.16px]">
              Powered by{" "}
              <Link href="" className="underline">
                Replicate
              </Link>{" "}
              and{" "}
              <Link href="" className="underline">
                Bytescale
              </Link>{" "}
              . Created by{" "}
              <Link href="" className="underline">
                Hassan
              </Link>{" "}
              (hassan@hey.com).
            </div>
          </div>
        </Drawer>
      </div>
    </nav>
  );
}

export default Navbar;
