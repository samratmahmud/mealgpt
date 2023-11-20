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

function PictureSections() {
  return (
    <section className="pb-6">
      <div className="flex justify-center bg-white py-4 mb-5">
        <img src="/images/Rectangle 75.png" alt="" />
      </div>
      <div className="max-w-[637px] m-auto">
        <div className="flex items-center justify-end gap-24 mb-6">
          <div className="text-3xl leading-normal">Salad Bowl with Veggies</div>
          <div role="button">
            <img src="/images/Trash.svg" alt="" />
          </div>
        </div>
        <div className="flex gap-14 justify-center mb-[75px]">
          {items.map(({title, number}, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-xl leading-normal">{title}</div>
              <div className="text-[40px] font-bold leading-normal text-primary">
                {number}
              </div>
            </div>
          ))}
        </div>
        <div
          role="button"
          className="text-3xl font-medium leading-normal bg-primary text-white py-2.5 px-16 text-center rounded-lg w-3/4 m-auto"
        >
          ADD TO “Breakfast”
        </div>
      </div>
    </section>
  );
}

export default PictureSections;
