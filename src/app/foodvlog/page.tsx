import Navbar from "@/components/global/navbar/Navbar";
import React from "react";
import Navigation from "./Navigation";
import FoodTable from "./FoodTable";
import ResultPanel from "./ResultPanel";

function page() {
  return (
    <main>
      <Navbar />
      <Navigation />
      <FoodTable />
      <div className="sm:mb-12">
        <div className="">
          <ResultPanel
            name="Day 1 Total:"
            nameM="Day 1 Total:"
            calories={0}
            protein={0}
            carbs={0}
          />
          <ResultPanel
            color="primary"
            name="You Need:"
            nameM="Total: "
            calories={1360}
            protein={66}
            carbs={60}
          />
        </div>
      </div>
    </main>
  );
}

export default page;
