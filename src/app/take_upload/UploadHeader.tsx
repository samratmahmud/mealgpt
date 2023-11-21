/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function UploadHeader() {
  return (
    <section>
      <div className="container py-9">
        <div className="flex items-center justify-between">
          <Link href="/foodvlog" role="button">
            <img src="/images/Arrow.svg" alt="" />
          </Link>
          <div className="text-2xl leading-normal">
            Take or upload a photo of your meal
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
    </section>
  );
}

export default UploadHeader;
