import React, { useContext, useState } from "react";
import logo from "./../imgs/Logo0.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Menu, X } from "lucide-react";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md text-black px-6 py-3">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 object-contain mr-3"
          />
          <span className="font-bold text-xl">MyClinic</span>
        </div>

        <ul className="hidden md:flex space-x-6 items-center text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-[#045f89] transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-[#045f89] transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-[#045f89] transition-colors"
            >
              About
            </Link>
          </li>

          {user?.role === "admin" && (
            <li>
              <Link
                to="/add-doctor"
                className="hover:text-[#045f89] transition-colors"
              >
                Add Doctor
              </Link>
            </li>
          )}

          {user?.role === "user" && (
            <>
              <li>
                <Link
                  to="/add-appointment"
                  className="hover:text-[#045f89] transition-colors"
                >
                  Add Appointment
                </Link>
              </li>
              <li>
                <Link
                  to="/my-appointment"
                  className="hover:text-[#045f89] transition-colors"
                >
                  My Appointments
                </Link>
              </li>
            </>
          )}

          {!user && (
            <>
              <li>
                <Link
                  to="/login"
                  className="bg-[#045f89] text-white px-4 py-2 rounded hover:bg-[#034d65] transition-colors"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="bg-[#045f89] text-white px-4 py-2 rounded hover:bg-[#034d65] transition-colors"
                >
                  Register
                </Link>
              </li>
            </>
          )}

          {user && (
            <li>
              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-800 transition-colors"
              >
                Logout
              </button>
            </li>
          )}
        </ul>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <ul className="md:hidden mt-3 space-y-2 bg-white p-4 shadow-lg rounded-lg">
          <li>
            <Link
              to="/home"
              className="block hover:text-[#045f89]"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="block hover:text-[#045f89]"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block hover:text-[#045f89]"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>

          {user?.role === "admin" && (
            <li>
              <Link
                to="/add-doctor"
                className="block hover:text-[#045f89]"
                onClick={() => setIsOpen(false)}
              >
                Add Doctor
              </Link>
            </li>
          )}

          {user?.role === "user" && (
            <>
              <li>
                <Link
                  to="/add-appointment"
                  className="block hover:text-[#045f89]"
                  onClick={() => setIsOpen(false)}
                >
                  Add Appointment
                </Link>
              </li>
              <li>
                <Link
                  to="/my-appointment"
                  className="block hover:text-[#045f89]"
                  onClick={() => setIsOpen(false)}
                >
                  My Appointments
                </Link>
              </li>
            </>
          )}

          {!user && (
            <>
              <li>
                <Link
                  to="/login"
                  className="block bg-[#045f89] text-white px-4 py-2 rounded"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="block bg-[#045f89] text-white px-4 py-2 rounded"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </li>
            </>
          )}

          {user && (
            <li>
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="block w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-800"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
