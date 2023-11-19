"use client";
import SignupToggle from "@/components/common/SignupToggle";
import Link from "next/link";
import React from "react";

const pages = [
  {
    name: "Goals & Gender",
    url: "",
  },
  {
    name: "Weight & Height",
    url: "",
  },
  {
    name: "Activity Level",
    url: "",
  },
];

function Header() {
  const [tab, setTab] = React.useState(0);
  return (
    <section>
      <div className="container pt-4 mb-16">
        <div className="bg-[#D9D9D9] w-full h-1 relative mb-5">
          <span className="absolute bg-primary w-[4%] h-1"></span>
        </div>
        <div className="flex gap-[23%]">
          <div className="hidden lg:block">
            <img src="/images/Arrow.svg" alt="" />
          </div>
          <div className="flex gap-5">
            {pages.map(({name, url}, index) => (
              <div key={index}>
                <Link href={url}>
                  <SignupToggle
                    number={index + 1}
                    title={name}
                    handelClick={() => setTab(index)}
                    isActive={tab === index}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
