import { ImFacebook2 } from "react-icons/im";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Brand */}
        <div>
          <img src={logo} alt="logo" className="h-10 w-10 rounded-full" />
          <p className="mt-4 text-sm text-gray-400">
            Modern fashion store with high-quality products, fast delivery,
            and secure payment.
          </p>

          {/* Socials */}
          <div className="flex gap-4 mt-6 text-gray-400">
            <ImFacebook2 size={22} />
            <FaInstagram size={22} />
            <FaYoutube size={22} />
            <FaWhatsapp size={22} />
          </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-semibold text-white mb-4">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">New Arrivals</li>
            <li className="hover:text-white cursor-pointer">Best Sellers</li>
            <li className="hover:text-white cursor-pointer">Men</li>
            <li className="hover:text-white cursor-pointer">Women</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">Shipping Info</li>
            <li className="hover:text-white cursor-pointer">Returns</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-4">Stay Updated</h3>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to get special offers and updates.
          </p>

          <div className="flex bg-gray-700 rounded-lg">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 text-white text-sm outline-none"
            />
            <button className="bg-white text-black px-4 text-sm font-semibold">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} YourStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
