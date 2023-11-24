/* eslint-disable @next/next/no-img-element */
import React from "react";

export interface FoodRowProps {
  name: string;
  description?: string;
  calories?: number;
  protein?: number;
  carbs?: number;
  images?: string[];
}

function FoodRow(props: FoodRowProps) {
  const {name, description, calories, protein, carbs, images} = props;

  const isLogs = calories && protein && carbs;

  return (
    <div>
      <hr
        className="w-full h-0.5"
        style={{
          backgroundImage: `linear-gradient(90deg,rgba(0,0,0, 0.01),rgba(0,0,0, 0.3),rgba(0,0,0, 0.01))`,
        }}
      />
      <div className="max-w-[800px] mx-auto flex items-center py-4">
        <div
          className={`lg:text-2xl text-xl leading-normal ${
            isLogs ? "flex-[0_0_34%]" : "flex-[0_0_50%]"
          }`}
        >
          <p>{name}</p>
          {description && <span className="text-black/30">{description}</span>}
        </div>

        <div className={`${!isLogs ? "flex-[0_0_0%]" : "flex-[0_0_46%]"}`}>
          {isLogs && (
            <div className="flex-grow grid grid-cols-2 md:grid-cols-3 gap-0.5 max-w-[270px]">
              <div className="first:col-span-2 md:first:col-span-1">
                <PreviewLog label="Calories" value={calories} />
              </div>
              <div>
                <PreviewLog label="Protein (g)" value={protein} />
              </div>
              <div>
                <PreviewLog label="Carbs (g)" value={carbs} />
              </div>
            </div>
          )}
        </div>

        <div
          className={`flex justify-end items-center ${
            isLogs ? "flex-[0_0_20%]" : "flex-[0_0_50%]"
          }`}
        >
          <label
            role="button"
            className={`flex gap-1.5 items-center md:py-3 py-2 ${
              images?.length ? "md:px-3 px-2" : "md:px-5 px-2"
            } px-5 md:bg-white bg-[#F6ECEC] rounded-md`}
          >
            <div className="flex-shrink-0">
              <img src="/images/Camera.svg" alt="" />
            </div>
            {!images?.length && (
              <p className="lg:text-xl text-[17px] leading-normal flex-shrink-0">
                Log Food
              </p>
            )}

            <input type="file" className="hidden" accept="image/*" />
          </label>
          <div className="hidden md:block">
            {images && (
              <div className="ml-6 flex gap-3">
                {images?.map((url, index) => (
                  <img key={index} src={url} alt="" />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function PreviewLog({label, value}: {label: string; value?: number}) {
  return (
    <div className="flex flex-col gap-0.5 text-center">
      <p className="text-[10px] whitespace-nowrap">{label}</p>
      <b className="lg:text-3xl text-xl text-primary">{value}</b>
    </div>
  );
}

export default FoodRow;
