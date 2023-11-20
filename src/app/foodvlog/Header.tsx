import React from "react";

function Header() {
  return (
    <section>
      <div className="container mt-4">
        <div className="flex justify-between">
          <div role="button">
            <img src="/images/Arrow (1).svg" alt="" />
          </div>
          <div className="flex flex-col gap-3 items-center">
            <p className="text-3xl font-semibold leading-normal">Day 1</p>
            <p className="text-2xl leading-normal mb-12">Thursday</p>
          </div>
          <div role="button">
            <img className="rotate-180" src="/images/Arrow.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
