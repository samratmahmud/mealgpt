/* eslint-disable @next/next/no-img-element */
import React from "react";

const items = [
  {
    title: "Calories",
    number: "1810",
  },
  {
    title: "Carbs (g)",
    number: "123",
  },
  {
    title: "Protein (g)",
    number: "90",
  },
];

function ImagePreview({file}: {file: File}) {
  return (
    <section className="pb-6">
      <div className="flex justify-center bg-white md:py-4 md:mb-5 mb-6">
        <img
          className="w-full object-cover h-full max-w-[640px] max-h-[585px] md:rounded-2xl"
          src={URL.createObjectURL(file)}
          alt=""
        />
      </div>
      <div className="max-w-[637px] m-auto container">
        <div className="flex items-center md:justify-end justify-center gap-24 md:mb-6 mb-7">
          <div className="md:text-3xl text-xl leading-normal">
            Salad Bowl with Veggies
          </div>
          <button role="button" className="hidden md:inline">
            <img src="/images/Trash.svg" alt="" />
          </button>
        </div>
        <div className="flex md:gap-14 gap-6 justify-center md:mb-[75px] mb-8">
          {items.map(({title, number}, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="md:text-xl text-[13px] leading-normal">
                {title}
              </div>
              <div className="md:text-[40px] text-3xl font-bold leading-normal text-primary">
                {number}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            role="button"
            className="md:text-3xl text-xl font-medium leading-normal bg-primary text-white md:py-2.5 py-2 text-center rounded-lg px-10 m-auto btn_drop_shadow focus:scale-95"
            tabIndex={1}
          >
            ADD TO “Breakfast”
          </button>
        </div>
      </div>
    </section>
  );
}

export default ImagePreview;
