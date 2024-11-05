"use client";
import { useState } from "react";

export default function NewItem({onAddItem}){

    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");
    const [quantity, setQuantity] = useState(1);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            id: Math.random().toString(36).substr(2, 9), 
            name,
            quantity,
            category
        };

        onAddItem(newItem);

        setName("");
        setQuantity(1);
        setCategory("produce");
    }
    const Increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const Decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    return(
        <form className="flex flex-col gap-6 p-6  shadow-lg" onSubmit={handleSubmit}>

        <div className="flex flex-col">
            <label className="text-2x1">Name:</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                placeholder="Enter item name"
            />
        </div>
        <div className="flex items-center gap-4">
            <p className="text-lg font-semibold">{quantity}</p>
            <button
                type="button"
                onClick={Decrement}
                className={`px-4 py-2 rounded-lg text-white ${quantity === 1 ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-400 hover:bg-blue-700'}`}
            >
                -
            </button>
            <button
                type="button"
                onClick={Increment}
                className={`px-4 py-2 rounded-lg text-white ${quantity === 20 ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-400 hover:bg-blue-700'}`}
            >
                +
            </button>
        </div>
        <div className="flex flex-col">
            <label className="text-lg font-semibold mb-2">Category:</label>
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400  text-black"
            >
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="meat">Meat</option>
            </select>
        </div>
        <button
            type="submit"
            className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
            Submit
        </button>
    </form>
    )
}
