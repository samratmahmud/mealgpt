/* eslint-disable @next/next/no-img-element */
import Logo from "@/components/global/navbar/Logo";
import Link from "next/link";
import React from "react";

function UploadHeader() {
  return (
    <section>
      <div className="container md:py-9 pt-3.5 pb-10">
        <div className="flex items-center justify-between">
          <Link href="/foodvlog" role="button">
            <img src="/images/Arrow.svg" alt="" />
          </Link>
          <div className="text-2xl leading-normal hidden md:inline-block">
            Take or upload a photo of your meal
          </div>
          <div className="md:hidden">
            <Logo />
          </div>
          <div role="button" className="flex items-center gap-5">
            <p>
              <img src="/images/Group 141.svg" alt="" />
            </p>
            <p>
              <img src="/images/Vector (1).svg" alt="" />
            </p>
          </div>
        </div>
      </div>
      <div className="text-[13px] leading-normal mb-3 md:mb-0 md:hidden text-center">
        Take a photo of your meal
      </div>
    </section>
  );
}

export default UploadHeader;
