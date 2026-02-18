import { SiCoffeescript } from "react-icons/si";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="max-w-full mx-auto px-8 py-16 text-gray-300 bg-black grid lg:grid-cols-3">
      <div className="lg:px-8">
        <img className="h-10 w-10 rounded-full" src={logo} alt="" />
        {/* <SiCoffeescript color="#57595B" size={30} /> */}
        <p className="py-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
          asperiores.
        </p>

        <div className="flex justify-between">
          <ImFacebook2 size={30} color="#57595B" />
          <FaInstagram size={30} color="#57595B" />
          <FaYoutube size={30} color="#57595B" />
          <FaWhatsapp size={30} color="#57595B" />
        </div>
      </div>
    <div className="flex lg:col-span-2 justify-between">
  <div className="pt-8">
    <p className="text-gray-700 my-2">Explore</p>
    <ul className="lg:flex-col text-sm cursor-pointer">
      <li className="py-2 text-[#57595B]">Home</li>
      <li className="py-2 text-[#57595B]">Our Menu</li>
      <li className="py-2 text-[#57595B]">About Us</li>
      <li className="py-2 text-[#57595B]">Contact</li>
    </ul>
  </div>

  <div className="pt-8">
    <p className="text-gray-700 my-2">Coffee</p>
    <ul className="text-sm cursor-pointer flex-col">
      <li className="py-2 text-[#57595B]">Espresso</li>
      <li className="py-2 text-[#57595B]">Cappuccino</li>
      <li className="py-2 text-[#57595B]">Latte</li>
      <li className="py-2 text-[#57595B]">Cold Brew</li>
    </ul>
  </div>

  <div className="pt-8">
    <p className="text-gray-700 my-2">Services</p>
    <ul className="text-sm cursor-pointer flex-col">
      <li className="py-2 text-[#57595B]">Dine In</li>
      <li className="py-2 text-[#57595B]">Take Away</li>
      <li className="py-2 text-[#57595B]">Online Order</li>
      <li className="py-2 text-[#57595B]">Catering</li>
    </ul>
  </div>

  <div className="pt-8">
    <p className="text-gray-700 my-2">Legal</p>
    <ul className="text-sm cursor-pointer flex-col">
      <li className="py-2 text-[#57595B]">Privacy Policy</li>
      <li className="py-2 text-[#57595B]">Terms of Service</li>
      <li className="py-2 text-[#57595B]">Refund Policy</li>
      <li className="py-2 text-[#57595B]">Cookie Policy</li>
    </ul>
  </div>
</div>

    </div>
  );
};

export default Footer;