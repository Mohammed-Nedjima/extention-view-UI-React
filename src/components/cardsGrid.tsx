import React, { type JSX } from "react";

import Card from "./card";

const CardsGrid: React.FC = (): JSX.Element => {
  const [data, setData] = React.useState<any>([]);
  React.useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then(setData);
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item: any, index: number) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};
export default CardsGrid;
