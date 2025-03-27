import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Navbar2 from "./Components/Navbar2";
import AboutUs from "./Components/AboutUs";
import Home from "./Components/Home";
import Product from "./Components/Product";
import Support from "./Components/Support";
import ContactUs from "./Components/ContactUs";
import Cart from "./Components/Cart";
import { CartProvider } from "./Components/CartContext";
import Wishlist from "./Components/Wishlist";

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Navbar />
          <Navbar2 />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Contact" element={<ContactUs />} />
            <Route path="/products" element={<Product />} />
            <Route path="/support" element={<Support />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>

          <Footer />
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
