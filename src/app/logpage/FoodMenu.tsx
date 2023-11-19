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

function FoodMenu() {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(246, 236, 236, 0.29) -4.6%, #F6ECEC 50.61%, rgba(246, 236, 236, 0.29) 107.83%)",
      }}
    >
      <div className="container">
        <div className="mb-5">
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
      </div>
    </section>
  );
}

export default FoodMenu;
