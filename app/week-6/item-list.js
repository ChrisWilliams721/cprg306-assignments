"use client";

import { useState, useEffect } from 'react';
import Item from './item';
import itemsData from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name'); // Set default sort by 'name'
  const [items, setItems] = useState([]);

  useEffect(() => {
    let sortedItems = [...itemsData];

    // Sort items based on sortBy state
    if (sortBy === 'name') {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'category') {
      sortedItems.sort((a, b) => a.category.localeCompare(b.category));
    }

    setItems(sortedItems);
  }, [sortBy]);

  return (
    <div>
      <div>
        <label>Sort By: </label>
        <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
          <option value="name">Name</option>
          <option value="category">Category</option>
        </select>
      </div>

      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}
