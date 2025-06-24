import React, { useState, type JSX } from "react";

interface filterProps {
  onChange: (selected: number) => void;
}
const Filter: React.FC<filterProps> = ({ onChange }): JSX.Element => {
  const buttons: { [key: number]: string } = {
    1: "All",
    2: "Active",
    3: "Inactive"
  };
  const [selected, setSelected] = useState(1);
  const onButtonClick = (index: number) => {
    setSelected(index);
    onChange(index);
  };
  return (
    <div className="flex justify-between mb-8">
      <h1 className="text-2xl text-card-header dark:text-card-header">
        Extensions List
      </h1>
      <div className="flex gap-4">
        {Object.keys(buttons).map((key) => (
          <button
            aria-selected={Number(key) === selected}
            key={key}
            onClick={() => onButtonClick(Number(key))}
            className={`bg-card dark:bg-card hover:bg-neutral-100 dark:hover:bg-neutral-600 duration-75 cursor-pointer rounded-3xl shadow-sm focus:shadow-none py-2 px-4 ${
              Number(key) === selected ? "bg-red-500 dark:bg-red-500" : ""
            }`}
          >
            {buttons[Number(key)]}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Filter;
