import logo from "../../assets/logo.png";
import { Navlinks } from "../../index";
import { Link } from "react-router-dom";
import { Menu, Minus, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const changemenu = () => {
    setOpen(!open);
  };
  return (
    <header>
      <div className="w-full max-w-[1240px] mx-auto px-4 h-26 uppercase flex items-center justify-between">
        <div>
          <img className="w-8 h-8 object-cover" src={logo} alt="logo" />
        </div>
        <p className="md:hidden text-lg font-extralight tracking-widest">
          hodan collaction
        </p>
        <ul className="hidden md:flex items-center gap-6">
          {Navlinks.map((navlink) => (
            <li key={navlink.id} className="cursor-pointer">
              <Link className="tracking-widest" to={navlink.path}>
                {navlink.label}
              </Link>
            </li>
          ))}
        </ul>
        <ShoppingCart className="hidden md:flex" />
        <div onClick={changemenu} className="md:hidden">
          {open ? <Minus size={25} className="" /> : <Menu size={25} />}
        </div>
        <div
          className={`
          fixed top-0 left-0 h-full w-[70%] bg-[#ffff] border-r border-gray-200 transform transition-transform ease-in-out duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
        >
          <ul className="w-full flex flex-col mx-10 mt-20 items-start gap-6">
            {Navlinks.map((navlink) => (
              <li key={navlink.id} className="cursor-pointer">
                <Link className="tracking-widest" to={navlink.path}>
                  {navlink.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
