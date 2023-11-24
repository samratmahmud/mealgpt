"use client";
import Navbar from "@/components/global/navbar/Navbar";
import React, {useState} from "react";
import UploadImage from "./UploadImage";
import ImagePreview from "./ImagePreview";
import UploadHeader from "./UploadHeader";

function TakeUploadPage() {
  const [imageSelected, setImageSelected] = useState(false);

  const [preview, setPreview] = useState(false);

  const handleImageChange = (event: any) => {
    // Check if there is a selected file
    const file = event.target.files[0];
    setImageSelected(!!file);
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
        <UploadHeader />
        {!preview && (
          <UploadImage
            handleImage={handleImageChange}
            imageSelected={imageSelected}
            goPreview={() => setPreview(true)}
          />
        )}
        {preview && <ImagePreview />}
      </div>
    </main>
  );
}

export default TakeUploadPage;
