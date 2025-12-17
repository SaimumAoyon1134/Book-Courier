import { FaFacebook, FaInstagram } from "react-icons/fa";
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <footer className="bg-[#68ba11]  text-gray-600 py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            BookCourier
          </h3>
          <p>
            Fast, reliable, and safe book delivery service across Bangladesh.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Books</li>
            <li className="hover:text-white cursor-pointer">Coverage Area</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Support</h4>
          <ul className="space-y-2">
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Follow Us</h4>
          <div className="flex gap-4 text-2xl">
            <FaFacebook className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <XIcon className="hover:text-white cursor-pointer" />
          </div>
        </div>

      </div>

      <div className="text-center mt-10">
        © {new Date().getFullYear()} BookCourier. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;