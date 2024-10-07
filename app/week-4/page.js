"use client"
import React, { useState } from 'react';

export default function Page(){
    const[quantity, setQuantity] = useState(1);
    let buttonStyles = "bg-blue-400 hover:bg-blue-700 rounded text-white mt-5 px-4 py-2";


    const Increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
        
    }
    const Decrement = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
            buttonStyles = "bg-gray-500 rounded text-white mt-5 px-4 py-2";
        }

    }
    return(
        <div>
            <p>{quantity}</p>
            <button
                onClick={Decrement}
                className={`${buttonStyles} ${quantity === 1 ? 'bg-gray-500 hover:bg-gray-500' : 'bg-blue-400 hover:bg-blue-700'}`}>
                -
            </button>
            <button onClick={Increment} 
            className={`${buttonStyles} ${quantity === 20 ? 'bg-gray-500 hover:bg-gray-500' : 'bg-blue-400 hover:bg-blue-700'}`}>+</button>
        </div>
    )
}