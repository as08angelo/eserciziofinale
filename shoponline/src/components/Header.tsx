import { useNavigate } from "react-router-dom"; 
import { useCart } from "../context/CartContext"; 
import RoundedButton from "./RoundedButton"; 
import "../css/Header.css"; 
import CartIcon from "../assets/shopping-cart.svg"; 

export function Header() { 
    const { totalItems } = useCart(); 
    const navigate = useNavigate(); 

    return ( 
        <header className="right-buttons"> 
            <div> 
                <p>Materiale didattico - PWF</p>  
            </div> 
            <div className="right-buttons"> 
                <RoundedButton  
                    label={totalItems > 0 ? totalItems.toString() : "0"} 
                    icon={CartIcon} 
                    onClick={() => { 
                        navigate("/cart"); 
                    }} 
                /> 
            </div> 
        </header> 
    ); 
}