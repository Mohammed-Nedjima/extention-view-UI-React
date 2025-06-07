import React, { type JSX } from "react";
import { Switch } from "@/components/ui/switch";

export interface CardProps {
  name: string;
  description: string;
  logo: string;
  isActive: boolean;
}
const Card: React.FC<CardProps> = (data: CardProps): JSX.Element => {
  return (
    <div className="p-4 bg-neutral-0 ring-2">
      <div className="flex gap-4 mb-4">
        <img
          src={data.logo}
          alt={`${data.name} logo`}
          className="w-16 h-16 mb-2"
        />
        <div className="">
          <h3 className="text-lg font-semibold text-neutral-800">
            {data.name}
          </h3>
          <p className="text-sm text-neutral-600">{data.description}</p>
        </div>
      </div>
      <div className="flex justify-between ">
        <button className="p-1 text-neutral-800 rounded-sm ring-2 ring-neutral-300 focus:ring-red-700 dark:focus:ring-red-400 hover:bg-red-700 dark:hover:bg-red-400">
          {" "}
          Remove{" "}
        </button>{" "}
        <Switch />{" "}
      </div>{" "}
    </div>
  );
};
export default Card;
