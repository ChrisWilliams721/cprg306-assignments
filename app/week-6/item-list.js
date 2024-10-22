"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./item.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const [itemlist, setItemlist] = useState(
    itemsData.map((item) => ({ ...item }))
  );
  const grouped = itemlist.reduce((groupedItems, item) => {
    const category = item.category;
    if (groupedItems[category] == null) groupedItems[category] = [];
    groupedItems[category].push(item);
    return groupedItems;
  }, {});

  const SortedItems = () => {
    return [...itemlist]
      .sort((a, b) => {
        if (sortBy === "name") {
          return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
          return a.category.localeCompare(b.category);
        }
        return 0;
      })
      .map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ));
  };
  const GroupedItems = () => {
    const sortedCategories = Object.keys(grouped).sort();
    return sortedCategories.map((category) => (
      <li key={category}>
        <h2 className="font-bold">{category}</h2>
        <ul>
          {grouped[category].map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      </li>
    ));
  };
  return (
    <div>
      <label>Sort by: </label>

      <button
        className="text-sm text-white bg-lime-500 hover:bg-lime-700 px-2 mx-2"
        onClick={() => setSortBy("name")}
      >
        Name
      </button>
      <button
        className="text-sm text-white bg-lime-500 hover:bg-lime-700 px-2 mx-2"
        onClick={() => setSortBy("category")}
      >
        category
      </button>
      <button
        className="text-sm text-white bg-lime-500 hover:bg-lime-700 px-2 mx-2"
        onClick={() => setSortBy("grouped")}
      >
        Grouped
      </button>

      <ul>{sortBy === "grouped" ? GroupedItems() : SortedItems()}</ul>
    </div>
  );
}
