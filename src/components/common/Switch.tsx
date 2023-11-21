import React from "react";

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function Switch(props: SwitchProps) {
  const {className, type, ...rest} = props;

  return (
    <label role="button" className={`relative z-0 w-12 h-7 ${className}`}>
      <input {...rest} className="peer hidden" type="checkbox" />
      <span className="absolute left-1 top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full peer-checked:left-[calc(100%-4px)] peer-checked:-translate-x-full z-10 duration-100" />
      <div className="peer-checked:bg-primary bg-black/30 relative w-full h-full rounded-full" />
    </label>
  );
}

export default Switch;
