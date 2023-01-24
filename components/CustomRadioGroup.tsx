import React from "react";
import { RadioGroup } from "@headlessui/react";
import classNames from "classnames";
export type CustomRadioGroupOption<TValue> = {
  label: string;
  value: TValue;
};

export type CustomRadioGroupProps<TValue> = {
  value: TValue | null;
  onChange(newVal: TValue): void;
  options: CustomRadioGroupOption<TValue>[];
  label: string;
};

// create a generic component definition that accepts any kind of value
const CustomRadioGroup = <TValue,>(props: CustomRadioGroupProps<TValue>) => {
  return (
    // use the value and onChange from props.
    <RadioGroup value={props.value} onChange={props.onChange}>
      <RadioGroup.Label className="text-lg my-2">
        {props.label}
      </RadioGroup.Label>
      {/* render each option. */}
      <div className="flex flex-col gap-2">
        {props.options.map((option) => {
          return (
            <RadioGroup.Option value={option.value} key={option.label}>
              {/* Use renderProps to get the checked state for each option. */}
              {/* Render the state appropriately using tailwind classes */}
              {({ checked }) => (
                <div
                  className={classNames({
                    "flex gap-2 rounded-md px-2 py-1 border-2 cursor-pointer":
                      true,
                    "outline outline-1": checked,
                  })}
                >
                  <span className="w-5 h-5">
                    {checked ? <span>✔️</span> : <span>⭕</span>}
                  </span>
                  <RadioGroup.Label>{option.label}</RadioGroup.Label>
                </div>
              )}
            </RadioGroup.Option>
          );
        })}
      </div>
    </RadioGroup>
  );
};

export default CustomRadioGroup;
