"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./item.json";

import { useState } from "react";

export default function Page(){
    const [itemlist, setItemlist] = useState(
        itemsData.map((item) => ({ ...item }))
      );

    const handleAddItem = (newItem) => {
        setItemlist((prevItems) => [...prevItems, newItem]);
      };
    return(
        <main>
            <h1 className="text-3xl font-bold text-center mb-8 underline">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={itemlist}/>
        </main>
    );
}