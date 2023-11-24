import React from "react";

import FoodRow, {FoodRowProps} from "./FoodRow";

const foodVlog: FoodRowProps[] = [
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

function FoodTable() {
  return (
    <div
      className="sm:mb-5"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(246, 236, 236, 0.29) -4.6%, #F6ECEC 50.61%, rgba(246, 236, 236, 0.29) 107.83%)`,
      }}
    >
      <div className="container">
        {foodVlog.map(
          ({name, calories, carbs, description, protein, images}, index) => (
            <FoodRow
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
  );
}

export default FoodTable;
