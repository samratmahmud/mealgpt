import React from "react";

interface PanelProps {
  name: string;
  calories?: number;
  protein?: number;
  carbs?: number;
  color?: "light" | "primary";
}

function Panel(props: PanelProps) {
  const {calories, carbs, name, protein, color = "light"} = props;

  let colorClasses = "";

  if (color === "primary") {
    colorClasses = "bg-primary text-white";
  }

  return (
    <div
      className={`flex justify-between items-center max-w-[896px] m-auto  px-12 rounded-md ${colorClasses}`}
    >
      <div className="text-2xl font-medium leading-normal">{name}</div>
      <div className="flex gap-4 py-3">
        <PanelValue label="Calories" value={calories} />
        <PanelValue label="Carbs" value={carbs} />
        <PanelValue label="Protein" value={protein} />
      </div>
    </div>
  );
}

function PanelValue({label, value}: {label: string; value?: number}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="text-[13px] leading-normal">{label}</div>
      <div className="text-2xl font-bold leading-normal">{value || "-"}</div>
    </div>
  );
}

export default Panel;
