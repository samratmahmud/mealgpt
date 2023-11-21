"use client";
import React, {useState} from "react";
import Button from "@/components/common/Button";

interface UploadImageProps {
  handleImage: (event: any) => void;
  imageSelected: boolean;
  goPreview: () => void;
}

function UploadImage(props: UploadImageProps) {
  const {handleImage, imageSelected, goPreview} = props;

  return (
    <section>
      <div className="pb-14 container px-12">
        <div className="py-56 bg-white mb-12">
          <div className="flex justify-center mb-5">
            <label className="text-2xl font-semibold leading-normal bg-primary py-[11px] px-14 text-white rounded-lg .btn_drop_shadow">
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImage}
              />
              Upload Image
            </label>
          </div>
          <div className="text-[13px] font-semibold leading-normal text-center text-black/50">
            or drag and drop an image
          </div>
        </div>
        <div className="max-w-[581px] m-auto mb-14">
          <textarea
            className="py-3 px-5 w-full h-32 rounded-lg placeholder:text-2xl leading-normal focus:outline-none text-2xl"
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
