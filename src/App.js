import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { createContext, useState } from "react";
import Shop from "./Pages/Shop";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactUs from "./Pages/ContactUs";
import Footer from "./components/Footer/Footer";
import Products from "./Pages/Products";

export const ShopContext = createContext(null);

function App() {
  const [sideBar, setSideBar] = useState(false);
  const [sideBarValue, setSideBarValue] = useState("");
  const [showBar, setShowBar] = useState("home");

  const hideSidebar = () => {
    if (window.scrollY >= 200) {
      setSideBar(false);
    }
  };

  window.addEventListener("scroll", hideSidebar);

  return (
    <div className="overflow-x-hidden">
      <ShopContext.Provider
        value={{
          sideBar,
          setSideBar,
          sideBarValue,
          setSideBarValue,
          showBar,
          setShowBar,
        }}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route
              path="/mens"
              element={
                <Products
                  // image={men_banner}
                  category="men"
                  product_title="Men's"
                />
              }
            />
            <Route
              path="/womens"
              element={
                <Products
                  // image={men_banner}
                  category="men"
                  product_title="Men's"
                />
              }
            />
            <Route
              path="/kids"
              element={
                <Products
                  // image={men_banner}
                  category="men"
                  product_title="Men's"
                />
              }
            />
          </Routes>
          <Footer />
        </BrowserRouter>
        <Sidebar />
      </ShopContext.Provider>
    </div>
  );
}

export default App;
