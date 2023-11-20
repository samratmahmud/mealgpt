import Navbar from "@/components/global/Navbar";
import React from "react";
import Header from "./UploadHeader";
import UploadImage from "./UploadImage";
import PictureSections from "./PictureSections";
import UploadHeader from "./UploadHeader";

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
        <UploadHeader />
        <UploadImage />
        {/* <PictureSections /> */}
      </div>
    </main>
  );
}

export default page;
