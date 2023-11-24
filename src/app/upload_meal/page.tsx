"use client";
import Navbar from "@/components/global/navbar/Navbar";
import React, {useEffect, useState} from "react";
import UploadImage from "./UploadImage";
import ImagePreview from "./ImagePreview";
import Navigation from "./Navigation";

function UploadMeal() {
  const [imageSelected, setImageSelected] = useState<File | null>(null);

  const [preview, setPreview] = useState(false);

  const handleImageChange = (file: File) => {
    setImageSelected(file);
  };

  return (
    <main>
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div
        style={{
          backgroundImage:
            "linear-gradient(179deg, #F6ECEC 1.04%, rgba(246, 236, 236, 0.00) 394.08%)",
        }}
      >
        <Navigation />
        {!preview && (
          <UploadImage
            handleImage={handleImageChange}
            imageSelected={imageSelected}
            goPreview={() => setPreview(!!imageSelected)}
          />
        )}
        {preview && imageSelected !== null && (
          <ImagePreview file={imageSelected} />
        )}
      </div>
    </main>
  );
}

export default UploadMeal;
