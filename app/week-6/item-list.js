"use client";

import { useState } from 'react';
import Item from './item';
import itemsData from './item.json';

export default function ItemList() {

  const [sortBy, setSortBy] = useState('name');
  const [filterCategory, setFilterCategory] = useState('all');

  const [itemlist, setItemlist] = useState(
    itemsData.map((item) => ({...item}))
  );

  const sortedItems = [...itemlist].sort((a,b) => {
    if(sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'quantity'){
      return a.quantity - b.quantity;
    }
    return 0;
  });
  const filteredItems = sortedItems.filter(item => {
    if (filterCategory === 'all') {
      return true; 
    }
    return item.category === filterCategory;
  });
  return(
    <div>
      <h1>Shopping List</h1>

      <label>Filter by category: </label>
      <select value={filterCategory} onChange={(event) => setFilterCategory(event.target.value)}>
        <option value={"all"}>All category</option>
        <option value={"dairy"}>dairy</option>
        <option value={"bakery"}>bakery</option>
        <option value={"produce"}>produce</option>
        <option value={"meat"}>meat</option>
        <option value={"canned goods"}>canned foods</option>
        <option value={"dry goods"}>dry goods</option>
        <option value={"household"}>household</option>
      </select>

      <ul>
        {filteredItems.map((item) => (
           <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
  )
  
}
