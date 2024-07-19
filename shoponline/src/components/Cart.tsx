/* export default function Cart(){
    return (<div>Questo è il carrello!</div>)
    
} */

    // Cart.tsx
import React from 'react';
import { useCart } from '../context/CartContext';
import '../css/Cart.css';

export default function Cart() {
const { cart } = useCart();

return (
    <div className="cart">
    <h2>Questo è il carrello!</h2>
    {cart.length === 0 ? (
        <p>Il carrello è vuoto.</p>
    ) : (
        <ul>
        {cart.map((item, index) => (
            <li key={index}>
            <img src={item.product.image} alt={item.product.name} />
            <div>
                <h3>{item.product.name}</h3>
                <p>Quantità: {item.amount}</p>
                <p>Prezzo: {item.product.price}</p>
            </div>
            </li>
        ))}
        </ul>
    )}
    </div>
);
}
