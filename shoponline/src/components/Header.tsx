import { useNavigate } from "react-router-dom"; 
import { useCart } from "../context/CartContext"; 
import RoundedButton from "./RoundedButton"; 
import "../css/Header.css"; 
import CartIcon from "../assets/shopping-cart.svg";
import Logo from "../assets/img/RayBan.jpg";


export function Header() { 
    const { totalItems } = useCart(); 
    const navigate = useNavigate(); 

    return ( 
        <header className="header_menu">

            <div className="logo-container">
                    <img src={Logo} alt="Logo" className="logo" />
                </div>

            <div>
                <nav>
                    <ul>
                        <li><a href="products">NOVITÀ</a></li>
                        <li><a href="products">OCCHIALI DA SOLE</a></li>
                        <li><a href="products">OCCHIALI DA VISTA</a></li>
                        <li><a href="products">CONTATTI</a></li>
                    </ul>
                </nav>
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