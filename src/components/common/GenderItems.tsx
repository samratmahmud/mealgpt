import React from "react";

interface itemsProps {
  item: string;
}

function GenderItems(props: itemsProps) {
  const {item} = props;
  return (
    <div
      role="button"
      className="text-2xl leading-normal py-2 px-16 border border-[#838383] rounded-lg"
    >
      {item}
    </div>
  );
}

export default GenderItems;
