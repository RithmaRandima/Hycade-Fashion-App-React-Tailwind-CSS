import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { createContext, useState } from "react";
// import Shop from "./Pages/Shop";
// import AboutUsPage from "./Pages/AboutUsPage";
// import ContactUs from "./Pages/ContactUs";
import Footer from "./components/Footer/Footer";
// import Products from "./Pages/Products";
import { lazy } from "react";
import { Suspense } from "react";

const Shop = lazy(() => import("./Pages/Shop"));
const AboutUsPage = lazy(() => import("./Pages/AboutUsPage"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));
const Products = lazy(() => import("./Pages/Products"));

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
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route
                path="/mens"
                element={<Products category="men" product_title="Men's" />}
              />
              <Route
                path="/womens"
                element={<Products category="women" product_title="Women's" />}
              />
              <Route
                path="/kids"
                element={<Products category="kid" product_title="Kids's" />}
              />
            </Routes>
          </Suspense>
          <Footer />
        </BrowserRouter>
        <Sidebar />
      </ShopContext.Provider>
    </div>
  );
}

export default App;
