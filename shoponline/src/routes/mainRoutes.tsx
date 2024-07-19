import { Route, Routes } from "react-router-dom";
import GridCard from "../components/GridCard";
import Home from "../components/Home";
import Cart from "../components/Cart";

export default function MainRouters(){
    return(
        <Routes>
            <Route path="/products" element={<GridCard />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    )
}

