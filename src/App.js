import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { createContext, useState } from "react";

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
    <div className="overflow-x-hidden h-[200vh]">
      <ShopContext.Provider value={{ sideBar, setSideBar }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
          </Routes>
        </BrowserRouter>
        <Sidebar />
      </ShopContext.Provider>
    </div>
  );
}

export default App;
