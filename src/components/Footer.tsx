import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <Link to="/about" className="hover:text-primary transition-colors">
            About Us
          </Link>
          <Link to="/terms" className="hover:text-primary transition-colors">
            Terms & Conditions
          </Link>
          <Link to="/privacy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link to="/cookies" className="hover:text-primary transition-colors">
            Cookies and Tracking Policy
          </Link>
        </div>
        <div className="text-center mt-4 text-sm text-gray-500">
          © {new Date().getFullYear()} SXO Resume. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;