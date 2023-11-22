import React from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function TextField(props: TextFieldProps) {
  const {className, ...rest} = props;

  return (
    <input
      className={`md:text-2xl text-[17px] md:placeholder:text-2xl placeholder:text-[17px] md:py-2.5 py-2 px-4 text-center w-full focus:outline-none text-black placeholder:text-black/40 border border-[#838383] focus:border-black rounded-lg gender_item_shadow ${className}`}
      {...rest}
    />
  );
}

export default TextField;
