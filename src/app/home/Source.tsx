import React from "react";

function Source() {
  return (
    <section className="bg-primary pt-[122px] pb-40 mb-[30px]">
      <div className="container">
        <div className="text-[40px] text-white font-bold leading-10 mb-7 text-center">
          Proudly open-source
        </div>
        <div className="text-2xl text-white font-medium max-w-[585px] m-auto text-center mb-16">
          Our source code is available on GitHub - feel free to read, review, or
          contribute to it however you want!
        </div>
        <div
          role="button"
          className="flex gap-3 bg-white py-3.5 px-16 rounded-lg justify-center max-w-[210px] m-auto text-2xl font-medium"
        >
          <img src="/images/Vector.svg" alt="" /> Star
        </div>
      </div>
    </section>
  );
}

export default Source;
