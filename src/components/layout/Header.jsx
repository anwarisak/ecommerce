import logo from "../../assets/logo.png";
import { Navlinks } from "../../index";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Minus, ShoppingCart, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const CartHandle = () => {
    navigate("/cart");
  };
  const cartItems = useSelector((state) => state.products.cart);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-4 h-20 flex items-center justify-between uppercase">
        <img className="w-8 h-8 object-cover" src={logo} alt="logo" />

        <p className="md:hidden text-lg font-light tracking-widest">
          hodan collection
        </p>

        <ul className="hidden md:flex items-center gap-8">
          {Navlinks.map((navlink) => (
            <li key={navlink.id}>
              <Link
                className="tracking-widest hover:text-gray-500 transition"
                to={navlink.path}
              >
                {navlink.label}
              </Link>
            </li>
          ))}
        </ul>
        <div onClick={CartHandle} className="relative md:block cursor-pointer">
          <ShoppingBag />

          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartItems.length}
            </span>
          )}
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="md:hidden cursor-pointer"
        >
          {open ? <Minus size={26} /> : <Menu size={26} />}
        </div>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 md:hidden"
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] bg-white border-r border-gray-200 transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col mt-24 ml-8 gap-8 uppercase">
          {Navlinks.map((navlink) => (
            <li key={navlink.id}>
              <Link
                onClick={() => setOpen(false)}
                className="tracking-widest"
                to={navlink.path}
              >
                {navlink.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
