import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { CartProvider } from "./context/CartContext";
import MainRouters from "./routes/mainRoutes";
import { Header } from "./components/Header";

function App() {
  return (
  <div className="App">
    <CartProvider>
      <BrowserRouter>

        <Header />
        <MainRouters />

      </BrowserRouter>
    </CartProvider>
  </div>
  );
}

export default App;
