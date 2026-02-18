import logo from "../../assets/logo.png";
import { Navlinks } from "../../index";
import { Link } from "react-router-dom";
import { Menu, ShoppingCart, Star } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full max-w-[1240px] mx-auto px-4 h-26 uppercase flex items-center justify-between">
      <div>
        <img className="w-8 h-8 object-cover" src={logo} alt="logo" />
      </div>
        <p className="md:hidden text-lg font-extralight tracking-widest">hodan collaction</p>
      <ul className="hidden md:flex items-center gap-6">
        {Navlinks.map((navlink) => (
          <li key={navlink.id} className="cursor-pointer">
            <Link className="tracking-widest" to={navlink.path}>{navlink.label}</Link>
          </li>
        ))}
      </ul>
      <div className="">
        <Menu className="md:hidden" />
      </div>
    </header>
  );
};

export default Header;
