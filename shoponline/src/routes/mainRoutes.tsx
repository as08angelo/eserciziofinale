import { Route, Routes } from "react-router-dom";
import GridCard from "../components/GridCard";

export default function MainRoutes(){
    return(
        <Routes>
            <Route path="/products" element={<GridCard />} />
        </Routes>
    )
}