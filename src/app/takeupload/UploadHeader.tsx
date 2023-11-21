/* eslint-disable @next/next/no-img-element */
import React from "react";

function UploadHeader() {
  return (
    <section>
      <div className="container py-9">
        <div className="flex items-center justify-between">
          <div role="button">
            <img src="/images/Arrow.svg" alt="" />
          </div>
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
