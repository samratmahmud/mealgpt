/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <section className="container mb-14">
      <div className="border border-black/30 mb-7" />
      <div className="flex justify-between gap-2 items-center">
        <div className="text-xl tracking-[0.16px]">
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
