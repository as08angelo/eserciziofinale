import {Product} from "../interfaces/productInterface";
import RoundedButton from "./RoundedButton";

export default function ProductCard ({ product }: { product: Product }) {
    const handleAddToCart = () => {
        console.log("ciao");
    };
    return(
        <>
            <div>
                <div>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                </div>
                <div>
                    <RoundedButton label="Add to Cart" onClick={handleAddToCart} />
                </div>
            </div>
        </>
    );
} 