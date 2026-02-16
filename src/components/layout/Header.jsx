import logo from "../../assets/logo.png";
import { Navlinks } from "../../index";
import { Link } from "react-router-dom";
import { Menu, BellDot, ShoppingCart } from "lucide-react";
const Header = () => {
  return (
    <header className="max-w-5xl mx-auto h-14 flex justify-around md:justify-between items-center bg-gray">
      <div className="">
        <img className="w-8 h-8 object-cover" src={logo} alt="" />
      </div>
      <ul className="flex items-center gap-4">
        {Navlinks.map((navlink, index) => (
          <li className="cursor-pointer" key={index}>
            <Link to={navlink.path}>{navlink.label}</Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-6">
        <ShoppingCart />
        <BellDot />
        <Menu />
      </div>
    </header>
  );
};

export default Header;
