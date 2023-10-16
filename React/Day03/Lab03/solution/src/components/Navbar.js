import { useContext } from "react";
import { CartContext } from "../utils/CartContext";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const [cartItems] = useContext(CartContext);
  return (
    <nav className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
      <div className="flex items-center justify-between">
        <div>
          <NavLink
            className="text-2xl font-bold text-gray-800 lg:text-3xl hover:text-gray-700"
            to={`/`}
          >
            Brand
          </NavLink>
        </div>
        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            aria-label="toggle menu"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu open: "block", Menu closed: "hidden" */}
      <div className="flex flex-col mt-4 space-y-2 lg:-mx-6 lg:mt-0 lg:flex-row lg:space-y-0"></div>
      <span className="block h-10 px-5 py-2 mt-4 text-sm text-center text-gray-700 capitalize transition-colors duration-200 transform border rounded-md lg:mt-0 hover:bg-gray-100 lg:w-auto">
        Cart ({cartItems})
      </span>
    </nav>
  );
};

export default Navbar;
