"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useState, useEffect } from "react";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
    const { user } = useUserAuth();
    const [itemlist, setItemlist] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    const loadItems = async () => {
        if (!user?.uid) {
            console.log("User is not defined");
            return;
        }
        try {
            const items = await getItems(user.uid);
            setItemlist(items);
        } catch (error) {
            console.error("Error fetching items:", error);
        }
    };

    useEffect(() => {
        if (user?.uid) {
            loadItems();
        }
    }, [user?.uid]);

    const handleAddItem = async (newItem) => {
        if (!user?.uid) return;
        try {
            const id = await addItem(user.uid, newItem);
            setItemlist((prevItems) => [...prevItems, { ...newItem, id }]);
        } catch (error) {
            console.error("Error adding item:", error);
        }
    };

    const handleItemSelect = (item) => {
        const cleanedName = item.name.split(",")[0].trim();
        console.log("Selected item:", cleanedName);
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

