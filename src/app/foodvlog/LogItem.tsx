/* eslint-disable @next/next/no-img-element */
import React from "react";

export interface LogItemProps {
  name: string;
  description?: string;
  calories?: number;
  protein?: number;
  carbs?: number;
  images?: string[];
}

function LogItem(props: LogItemProps) {
  const {name, description, calories, protein, carbs, images} = props;

  return (
    <div>
      <hr
        className="w-full h-0.5"
        style={{
          backgroundImage: `linear-gradient(90deg,rgba(0,0,0, 0.01),rgba(0,0,0, 0.3),rgba(0,0,0, 0.01))`,
        }}
      />
      <div className="max-w-[800px] mx-auto grid grid-cols-3 items-center py-4">
        <div className="text-2xl leading-normal">
          <p>{name}</p>
          {description && <span className="text-black/30">{description}</span>}
        </div>
        {calories && protein && carbs ? (
          <div className="flex-grow flex justify-between max-w-[270px]">
            <PreviewLog label="Calories" value={calories} />
            <PreviewLog label="Protein (g)" value={protein} />
            <PreviewLog label="Carbs (g)" value={carbs} />
          </div>
        ) : (
          <span />
        )}

        <div className="flex justify-end items-center">
          <label
            role="button"
            className={`flex gap-2 items-center py-3 ${
              images?.length ? "px-3" : "px-5"
            } px-5 bg-white rounded-md`}
          >
            <div>
              <img src="/images/Camera.svg" alt="" />
            </div>
            {!images?.length && (
              <p className="text-xl leading-normal">Log Food</p>
            )}

            <input type="file" className="hidden" accept="image/*" />
          </label>
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
  );
}

function PreviewLog({label, value}: {label: string; value?: number}) {
  return (
    <div className="flex flex-col gap-0.5 text-center">
      <p>{label}</p>
      <b className="text-[30px] text-primary">{value}</b>
    </div>
  );
}

export default LogItem;
