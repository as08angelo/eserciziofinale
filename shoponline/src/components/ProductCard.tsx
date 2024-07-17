import { useState } from "react";
import {Product} from "../interfaces/productInterface";
import RoundedButton from "./RoundedButton";
import { useCart } from "../context/CartContext";
import "../css/GridCard.css";

export default function ProductCard ({ product } : { product: Product }) {
    const [amount, setAmount] = useState(1);
    const { addToCart } = useCart();
    return(
        <>
            <div>
                <div className="products-card">
                    <img src={product.image} alt={product.name}/>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                </div>
                <div>
                    <RoundedButton 
                    label="Add to Cart" 
                    onClick={() => {
                        addToCart(product, amount);
                        setAmount(1);
                    }} 
                />
                </div>
            </div>
        </>
    );
} 