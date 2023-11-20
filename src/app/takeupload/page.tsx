import Navbar from "@/components/global/Navbar";
import React from "react";
import Header from "./Header";
import PictureSection from "./PictureSection";

function page() {
  return (
    <main>
      <Navbar />

      <div
        style={{
          backgroundImage:
            "linear-gradient(179deg, #F6ECEC 1.04%, rgba(246, 236, 236, 0.00) 394.08%)",
        }}
      >
        <Header />
        <PictureSection />
      </div>
    </main>
  );
}

export default page;
