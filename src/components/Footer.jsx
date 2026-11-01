import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  HelpCircle, 
  ShieldCheck, 
  FileText,
  Flame
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#4A0000] to-deepred text-cream font-sans mt-20 border-t-4 border-marigold">
      {/* Decorative floral topper or rangoli border */}
      <div className="h-2 bg-repeating-linear-gradient(90deg, #FFC61A, #FFC61A 15px, #FF9933 15px, #FF9933 30px)"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-saffron text-white p-1.5 rounded-lg">
                <Flame className="w-5 h-5" />
              </div>
              <span className="font-serif text-xl font-bold tracking-wider text-marigold">
                PujaSewa
              </span>
            </div>
            <p className="text-sm text-cream/80 leading-relaxed font-light">
              Har Puja Ka Samaan, Ek Hi Jagah. We are India's premium online store for pure, high-quality puja samagri, deity clothes, ceremony kits, and spiritual goods. Bringing divine devotion right to your doorstep.
            </p>
            {/* Social Media Icons */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-saffron hover:text-white flex items-center justify-center transition-all duration-300"
                title="Follow us on Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-saffron hover:text-white flex items-center justify-center transition-all duration-300"
                title="Follow us on Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-emerald-500 hover:text-white flex items-center justify-center transition-all duration-300"
                title="Chat with us on WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-serif text-base font-bold text-marigold uppercase tracking-wider border-b border-white/15 pb-2">
              Spiritual Sections
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-cream/90 font-light">
              <li>
                <Link to="/products?category=satyanarayan-katha" className="hover:text-marigold transition-colors">
                  Satyanarayan Ji Ki Katha
                </Link>
              </li>
              <li>
                <Link to="/products?category=puja-clothes" className="hover:text-marigold transition-colors">
                  Puja Clothes & Vastra
                </Link>
              </li>
              <li>
                <Link to="/products?category=rudrabhishek-samaan" className="hover:text-marigold transition-colors">
                  Rudrabhishek Puja Items
                </Link>
              </li>
              <li>
                <Link to="/products?category=basic-puja-samaan" className="hover:text-marigold transition-colors">
                  Daily Basic Samagri
                </Link>
              </li>
              <li>
                <Link to="/offers" className="hover:text-marigold transition-colors">
                  Festive Offers & Deals
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Help & Policies */}
          <div className="flex flex-col gap-3">
            <h4 className="font-serif text-base font-bold text-marigold uppercase tracking-wider border-b border-white/15 pb-2">
              Customer Care
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-cream/90 font-light">
              <li className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-marigold" />
                <a href="#faq" className="hover:text-marigold transition-colors">FAQs</a>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-marigold" />
                <a href="#terms" className="hover:text-marigold transition-colors">Terms & Conditions</a>
              </li>
              <li className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-marigold" />
                <a href="#privacy" className="hover:text-marigold transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col gap-3">
            <h4 className="font-serif text-base font-bold text-marigold uppercase tracking-wider border-b border-white/15 pb-2">
              Contact PujaSewa
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-cream/90 font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-marigold shrink-0 mt-0.5" />
                <span>108, Dharmik Tower, Haridwar Bypass Road, Uttarakhand - 249401</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-marigold shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-marigold shrink-0" />
                <span>contact@pujasewa.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-cream/60 font-light flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 PujaSewa E-Commerce. All Rights Reserved. Built with Vedic devotion.</p>
          <div className="flex items-center gap-4 text-cream/80">
            <span>Powered by Ganga Pure Water</span>
            <span>|</span>
            <span>100% Satvik Products</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
