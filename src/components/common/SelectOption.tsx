import React from "react";

interface SelectOptionProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
}

function SelectOption(props: SelectOptionProps) {
  const {label, type, className, ...rest} = props;

  return (
    <label role="button" className={className}>
      <input type="radio" className="peer hidden" {...rest} />
      <div className="md:text-2xl text-[17px] leading-normal md:py-2.5 py-2 px-16 border border-[#838383] rounded-lg gender_item_shadow peer-checked:text-white peer-checked:bg-primary">
        {label}
      </div>
    </label>
  );
}

export default SelectOption;
