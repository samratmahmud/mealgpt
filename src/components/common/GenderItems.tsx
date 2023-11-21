import React from "react";

interface itemsProps {
  item: string;
  isActive?: boolean;
  handelClick?: () => void;
}

function GenderItems(props: itemsProps) {
  const {item, isActive, handelClick} = props;
  return (
    <div
      onClick={handelClick}
      role="button"
      className={`text-2xl leading-normal py-2 px-16 border border-[#838383] rounded-lg gender_item_shadow ${
        isActive ? "text-white bg-primary" : ""
      }`}
    >
      {item}
    </div>
  );
}

export default GenderItems;
