import React, { useEffect, type JSX } from "react";
import Card from "./card";
import type { CardProps } from "./card";
import Filter from "./filter";

const STORAGE_KEY = "extension-manager-data";
const CardsGrid: React.FC = (): JSX.Element => {
  const [data, setData] = React.useState<CardProps[]>([]);
  const [filteredData, setFilteredData] = React.useState<CardProps[]>([]);
  React.useEffect(() => {
    const storedData = localStorage.getItem(STORAGE_KEY);

    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      fetch("/data.json")
        .then((res) => res.json())
        .then((initialData) => {
          setData(initialData);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
        });
    }
  }, []);

  const handleToggle = (index: number) => {
    setData((prevData) => {
      const updatedData = prevData.map((item, i) =>
        i === index ? { ...item, isActive: !item.isActive } : item
      );
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const handleRemove = (index: number) => () => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
  };

  const handleChangeFilter = (index: number) => {
    switch (index) {
      case 1:
        setFilteredData(data);
        break;
      case 2:
        setFilteredData(data.filter((i) => i.isActive));
        break;
      case 3:
        setFilteredData(data.filter((i) => !i.isActive));
    }
  };
  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  return (
    <div className="">
      <Filter onChange={handleChangeFilter} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredData.map((item: any, index: number) => (
          <Card
            key={index}
            {...item}
            onToggle={() => handleToggle(index)}
            onRemove={handleRemove(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default CardsGrid;
