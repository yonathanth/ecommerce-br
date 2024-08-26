import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6 px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo and Description */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white">Brikti's</h2>
          <p className="text-sm mt-2">
            Trendy fashion & accessories, all in one place.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a href="#" className="hover:text-yellow-500">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="hover:text-yellow-500">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="hover:text-yellow-500">
            <FaTwitter size={20} />
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-right">
          <p className="text-sm">info@briktis.com | +123 456 7890</p>
        </div>
      </div>

      {/* Footer Bottom */}

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
        <p className=" mb-3    text-center text-sm">
          Developed by ShalOps Digital Solutions PLC.
        </p>
        &copy; {new Date().getFullYear()} Brikti's. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
