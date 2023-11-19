import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="container">
      <div className="flex justify-between gap-5 items-center pt-5 mb-9">
        <Link href="/">
          <img src="/images/Group 8.svg" alt="" />
        </Link>
        <div className="flex items-center gap-10">
          <div role="button" className="text-xl hover:underline duration-300">
            How it Works
          </div>
          <div
            role="button"
            className="text-xl font-medium text-white bg-primary py-2.5 px-10 shadow-md rounded-md"
          >
            Sign up
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
