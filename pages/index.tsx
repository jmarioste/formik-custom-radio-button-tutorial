import CustomRadioGroup from "components/CustomRadioGroup";
import React, { useState } from "react";
const HomePage = () => {
  const [val, setVal] = useState<number | null>(null);
  return (
    <div className="w-fit m-4">
      <CustomRadioGroup
        label="My Radio Group"
        value={val}
        onChange={(val) => setVal(val)} // (parameter) val: number
        options={[
          {
            label: "option 1",
            value: 1,
          },
          {
            label: "option 2",
            value: 2,
          },
          {
            label: "option 3",
            value: 3,
          },
        ]}
      ></CustomRadioGroup>
    </div>
  );
};

export default HomePage;
