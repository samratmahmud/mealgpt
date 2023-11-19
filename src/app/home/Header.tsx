import React from "react";

function Header() {
  return (
    <section>
      <div className="flex items-center mb-28">
        <div>
          <div className="text-[80px] font-bold leading-[96%] mb-10">
            Set Your Goals & Track Your Progress
          </div>
          <div className="text-2xl text-[#121512] mb-8 max-w-[672px]">
            Take a picture of your meals and instantly generate nutritional
            information
          </div>
          <div
            role="button"
            className="text-2xl font-semibold bg-primary py-5 px-14 inline-block text-white rounded-lg shadow-md mb-3.5"
          >
            Try it for free
          </div>
          <div className="text-base leading-[121%] text-[#121512]/70">
            No credit card info needed
          </div>
        </div>
        <div className="md:-mr-[190px]">
          <img src="/images/header_image.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Header;
