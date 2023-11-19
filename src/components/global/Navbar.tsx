/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="">
      <div className="flex justify-between gap-5 items-center container py-5">
        <Link href="/">
          <img src="/images/Group 8.svg" alt="" />
        </Link>
        <div className="flex items-center gap-10">
          <div role="button" className="text-xl hover:underline duration-300">
            How it Works
          </div>
          <div
            role="button"
            className="text-xl font-medium text-white bg-primary py-[3px] px-10 rounded-md leading-normal btn_drop_shadow"
          >
            Sign up
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
