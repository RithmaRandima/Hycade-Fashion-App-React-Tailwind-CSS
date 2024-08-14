import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { createContext, useState } from "react";
import Shop from "./Pages/Shop";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactUs from "./Pages/ContactUs";
import Footer from "./components/Footer/Footer";

export const ShopContext = createContext(null);

function App() {
  const [sideBar, setSideBar] = useState(false);

  const hideSidebar = () => {
    if (window.scrollY >= 200) {
      setSideBar(false);
    }
  };

  window.addEventListener("scroll", hideSidebar);

  return (
    <div className="overflow-x-hidden">
      <ShopContext.Provider value={{ sideBar, setSideBar }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        <Sidebar />
      </ShopContext.Provider>
    </div>
  );
}

export default App;
