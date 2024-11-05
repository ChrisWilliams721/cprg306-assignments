"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./item.json";
import MealIdeas from "./meal-ideas";
import { useState } from "react";

export default function Page() {
    const [itemlist, setItemlist] = useState(itemsData.map((item) => ({ ...item })));
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItemlist((prevItems) => [...prevItems, newItem]);
    };

    const handleItemSelect = (item) => {
        const cleanedName = item.name.split(",")[0].trim(); // Clean the item name
        console.log("Selected item:", cleanedName); // Log the cleaned name
        setSelectedItemName(cleanedName);
    };

    return (
        <main>
            <h1 className="text-3xl font-bold text-center mb-8 underline">Shopping List</h1>
            <div className="flex justify-between">
                <div className="flex flex-col w-1/2 pr-4">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={itemlist} onItemSelect={handleItemSelect} />
                </div>
                <div className="w-1/2 pl-4">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
}
