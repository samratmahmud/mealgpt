import React from "react";

interface PanelProps {
  name: string;
  nameM?: string;
  calories?: number;
  protein?: number;
  carbs?: number;
  color?: "light" | "primary";
}

function Panel(props: PanelProps) {
  const {calories, carbs, name, nameM, protein, color = "light"} = props;

  let colorClasses = "";

  if (color === "primary") {
    colorClasses = "bg-primary text-white";
  }

  return (
    <div className="sm:container group">
      <div
        className={`flex justify-between items-center max-w-[896px] m-auto px-6 py-2 sm:px-12 sm:rounded-md group-first:hidden sm:group-first:flex ${colorClasses}`}
      >
        <div>
          <p className="text-2xl font-medium leading-normal hidden sm:inline">
            {name}
          </p>
          <p className="text-xl font-medium leading-normal sm:hidden">
            {nameM}
          </p>
        </div>
        <div className="flex gap-4 py-3">
          <PanelValue label="Calories" value={calories} />
          <PanelValue label="Carbs" value={carbs} />
          <PanelValue label="Protein" value={protein} />
        </div>
      </div>
    </div>
  );
}

function PanelValue({label, value}: {label: string; value?: number}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="text-[13px] leading-normal">{label}</div>
      <div className="md:text-2xl text-xl font-bold leading-normal">
        {value || "-"}
      </div>
    </div>
  );
}

export default Panel;
