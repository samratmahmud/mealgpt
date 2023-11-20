import Navbar from "@/components/global/Navbar";
import React from "react";
import Header from "./Header";
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
