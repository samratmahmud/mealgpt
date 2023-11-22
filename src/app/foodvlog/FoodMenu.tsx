/* eslint-disable @next/next/no-img-element */
import React from "react";
import Panel from "./Panel";
import LogItem, {LogItemProps} from "./LogItem";

const foodVlog: LogItemProps[] = [
  {
    name: "Breakfast",
    description: "Eggs",
    calories: 450,
    protein: 24,
    carbs: 63,
    images: ["/images/Rectangle 75.jpg"],
  },
  {
    name: "Lunch",
  },
  {
    name: "Dinner",
  },
  {
    name: "Snack/Supper",
  },
];

function FoodMenu() {
  return (
    <section className="sm:mb-12">
      <div className="">
        <div
          className="sm:mb-5"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(246, 236, 236, 0.29) -4.6%, #F6ECEC 50.61%, rgba(246, 236, 236, 0.29) 107.83%)`,
          }}
        >
          <div className="container">
            {foodVlog.map(
              (
                {name, calories, carbs, description, protein, images},
                index
              ) => (
                <LogItem
                  key={index}
                  name={name}
                  description={description}
                  calories={calories}
                  protein={protein}
                  carbs={carbs}
                  images={images}
                />
              )
            )}
          </div>
        </div>
        <div className="">
          <Panel
            name="Day 1 Total:"
            nameM="Day 1 Total:"
            calories={0}
            protein={0}
            carbs={0}
          />
          <Panel
            color="primary"
            name="You Need:"
            nameM="Total: "
            calories={1360}
            protein={66}
            carbs={60}
          />
        </div>
      </div>
    </section>
  );
}

export default FoodMenu;
