import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Gallery from "./Pages/Gallery";

function App() {
  return (
    <Router basename="/Vyana_birthday/">
      <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200">
        {/* 🌈 Navigation Bar */}
        <nav className="flex justify-center space-x-6 p-4 bg-gradient-to-r from-pink-400 to-purple-500 shadow-md">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-white bg-pink-600 px-4 py-1 rounded-full font-semibold transition"
                : "text-white hover:text-yellow-100 font-semibold transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-pink-600 px-4 py-1 rounded-full font-semibold transition"
                : "text-white hover:text-yellow-100 font-semibold transition"
            }
          >
            Menu
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-pink-600 px-4 py-1 rounded-full font-semibold transition"
                : "text-white hover:text-yellow-100 font-semibold transition"
            }
          >
            Gallery
          </NavLink>
        </nav>

        {/* 📄 Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
