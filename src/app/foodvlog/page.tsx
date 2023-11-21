import Navbar from "@/components/global/Navbar";
import React from "react";
import FoodMenu from "./FoodMenu";
import FoodHeader from "./FoodHeader";

function page() {
  return (
    <main>
      <Navbar />
      <FoodHeader />
      <FoodMenu />
    </main>
  );
}

export default page;
