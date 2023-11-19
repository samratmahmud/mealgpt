import React from "react";
import Header from "./Header";
import Navbar from "@/components/global/Navbar";
import FoodMenu from "./FoodMenu";

function page() {
  return (
    <main>
      <Navbar />
      <Header />
      <FoodMenu />
    </main>
  );
}

export default page;
