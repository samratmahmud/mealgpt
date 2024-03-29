import React from "react";

interface GenderSelection extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function GenderSelection(props: GenderSelection) {
  const {label, type, name, className, value, ...rest} = props;

  return (
    <label className="group" role="button">
      <input
        value={value || label}
        {...rest}
        className="peer hidden"
        type="radio"
        name="gender"
      />
      <span className="px-4 md:py-2.5 py-2 md:text-2xl text-[17px] font-normal peer-checked:font-medium inline-block border border-black bg-white text-black/40 peer-checked:bg-black peer-checked:border-transparent peer-checked:text-white w-1/2 group-first:rounded-l-lg group-last:rounded-r-lg gender_shadow">
        {label}
      </span>
    </label>
  );
}

export default GenderSelection;
