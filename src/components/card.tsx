import React, { type JSX } from "react";
import { Switch } from "@/components/ui/switch";

export interface CardProps {
  name: string;
  description: string;
  logo: string;
  isActive: boolean;
  onToggle: () => void;
  onRemove: () => void;
}

const Card: React.FC<CardProps> = (data: CardProps): JSX.Element => {
  return (
    <div className="p-4 text-card-foreground dark:text-card-foreground bg-background dark:bg-card ring-1 ring-neutral-300 flex flex-col justify-between gap-4 rounded-md dark:ring-neutral-700">
      <div className="flex gap-4 ">
        <img
          src={data.logo}
          alt={`${data.name} logo`}
          className="w-16 h-16 mb-2"
        />
        <div className="">
          <h3 className="text-lg font-bold text-card-header dard:text-card-header ">
            {data.name}
          </h3>
          <p className="text-sm">{data.description}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={data.onRemove}
          className="cursor-pointer px-2 py-1 dark:text-neutral-50 rounded-2xl ring-1 ring-neutral-300 focus:bg-neutral-100 dark:focus:bg-neutral-600 focus:ring-primary hover:bg-red-500 dark:hover:bg-red-400"
        >
          Remove
        </button>
        <Switch checked={data.isActive} onCheckedChange={data.onToggle} />
      </div>
    </div>
  );
};

export default Card;
