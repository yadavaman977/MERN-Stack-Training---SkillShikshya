
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const linkStyle =
    "text-sm text-gray-600 transition-colors duration-200 hover:text-red-600";

  return (
    <footer className="border-t border-gray-100 bg-gradient-to-b from-white to-red-50/30 text-gray-700">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr] lg:gap-16">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center">
              <span className="text-3xl font-extrabold tracking-tight text-red-600">
                Mero
              </span>
              <span className="text-3xl font-extrabold tracking-tight text-gray-900">
                Bazar
              </span>
              <span className="text-3xl font-extrabold text-red-600">.</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-600">
              Your trusted destination for electronics, fashion, home
              essentials, and everyday shopping—all in one place.
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm text-gray-600">
              <MapPin size={18} className="shrink-0 text-red-600" />
              <span>Kathmandu, Nepal</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-gray-900">
              <span className="h-4 w-1 rounded-full bg-red-600" />
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link to="/" className={linkStyle}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className={linkStyle}>
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/about" className={linkStyle}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className={linkStyle}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-gray-900">
              <span className="h-4 w-1 rounded-full bg-red-600" />
              Get in Touch
            </h3>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-600">
              Have a question about MeroBazar? We'd love to hear from you.
              Reach out anytime.
            </p>

            <a
              href="mailto:support@merobazar.com"
              className="group mt-5 flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition duration-200 hover:border-red-200 hover:bg-red-50/50 hover:shadow-md"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <Mail size={18} />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-xs text-gray-500">
                  Email us
                </span>
                <span className="mt-1 block break-all text-sm font-semibold text-gray-900">
                  support@merobazar.com
                </span>
              </span>

              <ArrowUpRight
                size={16}
                className="shrink-0 text-gray-400 transition-colors group-hover:text-red-600"
              />
            </a>

            <a
              href="tel:+9779805930000"
              className="group mt-3 flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition duration-200 hover:border-red-200 hover:bg-red-50/50 hover:shadow-md"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <Phone size={18} />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-xs text-gray-500">Call us</span>
                <span className="mt-1 block text-sm font-semibold text-gray-900">
                  +977 9805930000
                </span>
              </span>

              <ArrowUpRight
                size={16}
                className="shrink-0 text-gray-400 transition-colors group-hover:text-red-600"
              />
            </a>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-gray-500 sm:text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-red-600">MeroBazar</span>.
            All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Designed &amp; Developed by{" "}
            <a
              href="https://amankumaryadav.com.np/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-gray-900 transition-colors duration-200 hover:text-red-600"
            >
              Aman Kumar Yadav
              <ArrowUpRight size={14} />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
