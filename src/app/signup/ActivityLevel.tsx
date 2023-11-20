import Buttons from "@/components/common/Buttons";
import GenderItems from "@/components/common/GenderItems";
import React, {useState} from "react";

const items = ["Very Active", "Active", "Slightly Active", "Not Active"];

interface GenderProps {
  handelNext?: () => void;
}

function ActivityLevel({handelNext}: GenderProps) {
  const [tab, setTab] = useState(1000000);
  return (
    <section>
      <div className="container max-w-[581px] m-auto text-center">
        <div className="text-3xl leading-normal mb-9">
          What is your activity level?
        </div>
        <div className="flex flex-col gap-3 mb-96">
          {items.map((item, index) => (
            <div key={index}>
              <GenderItems
                item={item}
                isActive={tab === index}
                handelClick={() => setTab(index)}
              />
            </div>
          ))}
        </div>
        <div className="mb-28">
          <Buttons onClick={handelNext} name="CONTINUE" />
        </div>
      </div>
    </section>
  );
}

export default ActivityLevel;
