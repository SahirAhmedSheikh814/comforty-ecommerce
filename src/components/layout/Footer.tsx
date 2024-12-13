
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-10 border-t-2 border-gray-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-14">
          {/* Comforty Logo and Description */}
          <div>
            <img
              src="/Logo.svg"
              alt="Comforty Logo"
              className="mb-4"
            />
            <p className="text-[#272343] w-[3050] h-[72px] text-base mb-4">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
              Cras egestas purus.
            </p>
            <div className="flex space-x-4 md:mt-20">
              <a
                href="#"
                className="text-gray-500 hover:text-blue-500 transition"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-500 transition"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-pink-500 transition"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-700 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Category Section */}
          <div>
            <h4 className="text-[#9A9CAa] font-semibold mb-4">Category</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="nav__link">Sofa</a></li>
              <li><a href="#" className="nav__link">Armchair</a></li>
              <li><a href="#" className="nav__link">Wing Chair</a></li>
              <li><a href="#" className="nav__link">Desk Chair</a></li>
              <li><a href="#" className="nav__link">Wooden Chair</a></li>
              <li><a href="#" className="nav__link">Park Bench</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="text-[#9A9CAa] font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="nav__link">Help & Support</a></li>
              <li><a href="#" className="nav__link">Terms & Conditions</a></li>
              <li><a href="#" className="nav__link">Privacy Policy</a></li>
              <li><a href="#" className="nav__link">Help</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="text-gray-800 font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat sit.
            </p>
            <form className="flex flex-col gap-3 sm:items-center">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md lg:text-base md:text-xs focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-[#029Fae] text-white font-normal rounded-md hover:bg-blue-600 transition"
              >
                Subscribe
              </button>
            </form>
            <p className="text-[#272343] text-sm my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
            </p>
          </div>
        </div>

        {/* Divider Above Bottom Section */}
        <div className="border-t-2 border-gray-300 my-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-6 text-gray-500 text-sm">
          <p>
            © 2021 - Bloggy - Designed & Developed by <span className="text-gray-800">Zakirsoft</span>
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <img src="/PayPal and VISA card Logo.svg" alt="PayPal" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
