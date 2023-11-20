import React from "react";

const foodVlog = [
  {
    name: "Breakfast",
    icon: "/images/Camera.svg",
    title: "Log Food",
  },
  {
    name: "Lunch",
    icon: "/images/Camera.svg",
    title: "Log Food",
  },
  {
    name: "Dinner",
    icon: "/images/Camera.svg",
    title: "Log Food",
  },
  {
    name: "Snack/Supper",
    icon: "/images/Camera.svg",
    title: "Log Food",
  },
];

const neededPage = [
  {
    title: "Day 1 Total:",
    items: [
      {name: "Calories", amount: "-"},
      {name: "Protein (g)", amount: "-"},
      {name: "Carbs (g)", amount: "-"},
    ],
  },
  {
    title: "You Need:",
    items: [
      {name: "Calories", amount: "1360"},
      {name: "Protein (g)", amount: "66"},
      {name: "Carbs (g)", amount: "60"},
    ],
  },
];

function FoodMenu() {
  return (
    <section>
      <div className="mx-4 mb-64">
        <div
          className="mb-5"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(246, 236, 236, 0.29) -4.6%, #F6ECEC 50.61%, rgba(246, 236, 236, 0.29) 107.83%)",
          }}
        >
          {foodVlog.map(({name, title, icon}, index) => (
            <div key={index}>
              <hr
                className="w-full h-0.5"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg,rgba(0,0,0, 0.01),rgba(0,0,0, 0.3),rgba(0,0,0, 0.01))",
                }}
              />
              <div className="max-w-[800px] m-auto flex justify-between items-center py-6">
                <div className="text-2xl leading-normal">{name}</div>
                <div
                  role="button"
                  className="flex gap-2 items-center py-3 px-5 bg-white rounded-md"
                >
                  <p>
                    <img src={icon} alt="" />
                  </p>
                  <p className="text-xl leading-normal">{title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="">
          {neededPage.map(({title, items}, index) => (
            <div
              key={index}
              className="flex justify-between items-center max-w-[896px] m-auto last:bg-primary px-12 last:rounded last:text-white"
            >
              <div className="text-2xl font-medium leading-normal">{title}</div>
              <div className="flex gap-4 py-[11px]">
                {items.map(({name, amount}, index) => (
                  <div key={index} className="flex flex-col items-center gap-1">
                    <div className="text-[13px] leading-normal">{name}</div>
                    <div className="text-2xl font-bold leading-normal">
                      {amount}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FoodMenu;
