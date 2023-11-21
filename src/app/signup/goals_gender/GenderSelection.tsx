import React from "react";

interface checkedProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function GenderSelection(props: checkedProps) {
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
      <span className="px-4 py-2 text-2xl font-normal peer-checked:font-medium inline-block border border-black bg-white text-black/40 peer-checked:bg-black peer-checked:border-transparent peer-checked:text-white w-1/2 group-first:rounded-l-lg group-last:rounded-r-lg gender_shadow">
        {label}
      </span>
    </label>
  );
}

export default GenderSelection;
