import React from "react";

interface checkedProps {
  name: string;
}

function CheckBox({name}: checkedProps) {
  return (
    <label className="group" role="button">
      <input className="peer hidden" type="radio" name="gender" />
      <span className="px-4 py-2 text-2xl font-normal peer-checked:font-medium inline-block border border-black bg-white text-black/40 peer-checked:bg-black peer-checked:border-transparent peer-checked:text-white w-1/2 group-first:rounded-l-lg group-last:rounded-r-lg gender_shadow">
        {name}
      </span>
    </label>
  );
}

export default CheckBox;
