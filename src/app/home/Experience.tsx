import React from "react";

function Experience() {
  return (
    <section className="bg-[rgba(212,_99,_99,_0.1)] py-44 mb-12">
      <div className="container">
        <div className="flex gap-16 justify-between items-center">
          <div className="text-[40px] font-medium leading-[102%] max-w-[600px]">
            Sign up now and experience the future of dietary tracking!
          </div>
          <div className="-mt-[8%]">
            <img src="/images/Vector 7.svg" alt="" />
          </div>
          <div
            role="button"
            className="text-3xl font-semibold text-white py-6 px-[106px] rounded-lg bg-primary whitespace-nowrap"
          >
            Try it for free
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
