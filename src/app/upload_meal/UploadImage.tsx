/* eslint-disable @next/next/no-img-element */
"use client";
import React, {useState} from "react";
import Button from "@/components/common/Button";

interface UploadImageProps {
  handleImage: (event: any) => void;
  imageSelected: File | null;
  goPreview: () => void;
}

function UploadImage(props: UploadImageProps) {
  const {handleImage, imageSelected, goPreview} = props;

  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleImage(files[0]);
    }
  };

  return (
    <section>
      <div className="pb-14 md:px-12 container">
        <div
          className={`md:py-56 py-36 bg-white md:mb-12 mb-6 ${
            isDragging ? "border-dashed border-2 border-primary" : ""
          }`}
          aria-label="drag area"
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className="flex justify-center mb-5">
            <label
              className="text-2xl font-semibold leading-normal bg-primary py-[11px] px-14 text-white rounded-lg .btn_drop_shadow focus:scale-95"
              role="button"
              tabIndex={-1}
            >
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => handleImage(e.target.files?.[0])}
              />
              Upload Image
            </label>
          </div>
          <div className="text-[13px] font-semibold leading-normal text-center text-black/50 hidden md:block">
            or drag and drop an image
          </div>
        </div>
        <div className="md:hidden">
          <div className="flex justify-center mb-7 md:mb-0">
            <img src="/images/Group 147.svg" alt="" />
          </div>
        </div>
        <div className="max-w-[581px] m-auto mb-14 px-4">
          <textarea
            className="md:py-3 py-2.5 px-5 w-full md:h-32 h-11 rounded-lg md:placeholder:text-2xl placeholder:text-[17px] leading-normal focus:outline-none md:text-2xl text-[17px] resize-none"
            name=""
            id=""
            placeholder="Add a description (optional)"
          ></textarea>
        </div>
        <div className="max-w-[429px] mx-auto flex justify-center">
          <Button onClick={goPreview} disabled={!imageSelected}>
            CONTINUE
          </Button>
        </div>
      </div>
    </section>
  );
}

export default UploadImage;
