"use client";

import { useState } from 'react';
import Item from './item';
import itemsData from './item.json';

export default function ItemList() {

  const [sortBy, setSortBy] = useState('name');

  const [itemlist, setItemlist] = useState(
    itemsData.map((item) => ({...item}))
  );

  const sortedItems = [...itemlist].sort((a,b) => {
    if(sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category'){
      return a.category.localeCompare(b.category);
    }
    return 0;
  });
  return(
    <div >
      <label>Sort by: </label>

      <button
        className="text-sm text-white bg-lime-500 hover:bg-lime-700 px-2 mx-2"
        onClick={() => setSortBy('name')}
      >
        Name
      </button>
      <button
        className="text-sm text-white bg-lime-500 hover:bg-lime-700 px-2 mx-2"
        onClick={() => setSortBy('category')}
      >
        category
      </button>

      <ul>
        {sortedItems.map((item) => (
           <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
  )
  
}
