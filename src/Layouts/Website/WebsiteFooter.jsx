import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="relative text-white py-8 bg-cover bg-center w-full p-6 lg:p-10  flex flex-col justify-end"
      style={{
        backgroundImage:
          "url('https://olympic.org.nz/images/footer-bg-shirt-3.webp')",
      }}
    >
      {/* 🔲 Dark Overlay (INSIDE Footer & Positioned) */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />

      {/* Content with z-10 to appear above overlay */}
      <div className="relative z-10  ">
        <h1 className="text-xl font-semibold uppercase tracking-wide mb-4 text-center">
          Our Partners
        </h1>

        <div className="w-full flex flex-col justify-center items-center h-[3cm] ">
          <h1 className="text-5xl">LOGO</h1>
        </div>

        <div className="container mx-auto px-4 border-b-[10px] border-r-[10px] border-t-[10px] border-[#2E2E30] rounded-2xl p-6 lg:p-10 bg-opacity-70 mt-[2cm]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Column 1 */}
            <div className="flex justify-center items-start flex-col">
              <h3 className="font-bold text-xl lg:text-2xl ">
                Important Pages
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:underline">
                    Photos
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="flex justify-center items-start flex-col">
              <h3 className="font-bold text-xl lg:text-2xl ">Association</h3>
              <ul className="mt-4 space-y-2 text-sm md:text-base ">
                <li>
                  <Link to="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/achievement/shivchhatrapati-awardee"
                    className="hover:underline"
                  >
                    Achievements
                  </Link>
                </li>
                <li>
                  <Link to="/history/fencing" className="hover:underline">
                    History
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="flex justify-center items-start flex-col">
              <h3 className="font-bold text-xl lg:text-2xl ">
                Important Links
              </h3>
              <ul className="mt-4 space-y-2 text-sm md:text-base ">
                <li>
                  <Link to="/team/office-bearer" className="hover:underline">
                    Our Team
                  </Link>
                </li>
                <li>
                  <a
                    href="https://mahafencing.in/home/privacy_policy"
                    className="hover:underline"
                  >
                    Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://mahafencing.in/home/terms_conditions"
                    className="hover:underline"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Icons */}
            <div className="flex flex-col items-start">
              <h3 className="font-bold text-xl lg:text-2xl mb-4">Follow</h3>
              <div className="flex  flex-wrap space-x-4 w-[5cm]">
                <a href="#" className="hover:text-gray-300">
                  <FaInstagram size={40} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaFacebookF size={40} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaYoutube size={40} />
                </a>

                <a href="#" className="hover:text-gray-300">
                  <FaLinkedin size={40} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaTiktok size={40} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-xs md:text-sm lg:text-start mb-[2cm] w-screen flex flex-wrap">
          <div className="w-[50%]">
            <div className="flex justify-center lg:justify-start space-x-2 mt-1 mb-2">
              <a
                href="https://mahafencing.in/home/privacy_policy"
                className="underline hover:text-gray-400"
              >
                Privacy Policy & Refund Policy
              </a>
              <span>|</span>
              <a
                href="https://mahafencing.in/home/terms_conditions"
                className="underline hover:text-gray-400"
              >
                Terms & Conditions
              </a>
            </div>

            <a href="https://www.sublimetechnologies.in/">
              <p>&copy; Powered by Sublime Technologies</p>
            </a>
          </div>

          <div className="w-[50%]">
            <div className="w-[90%] flex justify-end">
              <Link to="/admin" className="hover:underline">
                <img
                  src="https://olympic.org.nz/images/shield-logo.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
