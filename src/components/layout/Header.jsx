import logo from "../../assets/logo.png";
import { Navlinks } from "../../index";
import { Link } from "react-router-dom";
import { Menu, BellDot, ShoppingCart } from "lucide-react";
const Header = () => {
  return (
    <header className="w-full max-w-[1240px] flex-wrap mx-auto h-24 md:p-6 flex justify-around md:justify-between items-center">
      <div className="">
        <img className="w-8 h-8 object-cover" src={logo} alt="" />
      </div>
      <ul className="hidden md:flex items-center gap-4">
        {Navlinks.map((navlink, index) => (
          <li className="cursor-pointer" key={index}>
            <Link to={navlink.path}>{navlink.label}</Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-6">
        {/* <ShoppingCart /> */}
        {/* <BellDot /> */}
        <Menu />
      </div>
    </header>
  );
};

export default Header;
