/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <section className="container mb-[60px]">
      <div className="border border-black/30 md:mb-7 mb-3" />
      <div className="flex lg:flex-row flex-col justify-between gap-5 items-center">
        <div className="md:text-xl text-[13px] tracking-[0.16px] text-center lg:text-left">
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
        <div className="flex gap-2.5">
          <Link href="">
            <img src="/images/twitter.svg" alt="" />
          </Link>
          <Link href="">
            <img src="/images/github.svg" alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Footer;
