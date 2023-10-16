import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { CartContext } from "./utils/CartContext";
import { useState } from "react";
import Product from "./pages/Product";
import Home from "./pages/Home";

function App() {
  let [cartItems, setCartItems] = useState(0);

  return (
    <div className="App">
      <section className="bg-white">
        <CartContext.Provider value={[cartItems, setCartItems]}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route index element={<Home />} />
              <Route path="product/:id" element={<Product />} />
            </Routes>
          </BrowserRouter>
        </CartContext.Provider>
        <Footer />
      </section>
    </div>
  );
}

export default App;
