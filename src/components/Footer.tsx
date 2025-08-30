import { Heart, Instagram, Facebook, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-royal-maroon text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src={logo} 
                alt="Attire Atelier Logo" 
                className="h-12 w-auto bg-white rounded-lg p-2"
              />
              <span className="ml-3 text-2xl font-bold text-golden">
                Attire Atelier
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Preserving the elegance of traditional Indian craftsmanship through 
              our carefully curated collection of handcrafted garments. Each piece 
              tells a story of heritage and artistry.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-white/10 p-3 rounded-full hover:bg-golden transition-elegant"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 p-3 rounded-full hover:bg-golden transition-elegant"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 p-3 rounded-full hover:bg-golden transition-elegant"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-golden">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#about" 
                  className="text-gray-300 hover:text-golden transition-smooth"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#gallery" 
                  className="text-gray-300 hover:text-golden transition-smooth"
                >
                  Our Collection
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-300 hover:text-golden transition-smooth"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/919876543210" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-golden transition-smooth"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-golden">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <p>
                <strong>Phone:</strong><br />
                +91 98765 43210
              </p>
              <p>
                <strong>Email:</strong><br />
                info@attireatelier.com
              </p>
              <p>
                <strong>Location:</strong><br />
                Mumbai, Maharashtra<br />
                India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 sm:mb-0">
              © {currentYear} Attire Atelier. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-golden" fill="currentColor" /> 
              for traditional fashion lovers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;