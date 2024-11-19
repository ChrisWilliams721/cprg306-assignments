"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useState, useEffect } from "react";
import getItems from "./__services/shopping-list-service";
import addItem from "./__services/shopping-list-service";

export default function Page() {
    const [itemlist, setItemlist] = useState(itemsData.map((item) => ({ ...item })));
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = async (newItem) => {
        try {
            const id = await addItem(user.uid, newItem);
            setItemlist((prevItems) => [...prevItems, { id, ...newItem }]);
        } catch (error) {
            console.error("Failed to add item:", error);
        }
    };

    const handleItemSelect = (item) => {
        const cleanedName = item.name.split(",")[0].trim();
        console.log("Selected item:", cleanedName);
        setSelectedItemName(cleanedName);
    };
    async function loadItems() {
        try {
            const items = await getItems(user.uid);
            setItemlist(items);
        } catch (error) {
            console.error("Failed to fetch items:", error);
        }
    }
    useEffect(() => {
        loadItems();
    }, [user]);

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

