import { Instagram, Twitter, Facebook, Youtube, MessageCircle, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#3d2817] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* App Download Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Download the App Now</h3>
            <div className="bg-white rounded p-4 mb-4 flex items-center justify-center">
              <div className="text-center">
                <div className="text-[#3d2817] text-sm font-semibold mb-2">
                  QR Code
                </div>
                <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-600">
                  [QR Code]
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <button className="w-full bg-gray-800 hover:bg-gray-700 py-2 rounded text-sm font-medium transition-colors">
                Play Store
              </button>
              <button className="w-full bg-gray-800 hover:bg-gray-700 py-2 rounded text-sm font-medium transition-colors">
                App Store
              </button>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-[#d4a574] transition-colors">
                  Delivery Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d4a574] transition-colors">
                  International Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d4a574] transition-colors">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d4a574] transition-colors">
                  Track your Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d4a574] transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d4a574] transition-colors">
                  Find a Store
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Information</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-[#d4a574] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d4a574] transition-colors">
                  Offers & Contest Details
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d4a574] transition-colors">
                  Help & FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d4a574] transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-300 mb-2">Phone</p>
                <p className="font-semibold">1800-266-0123</p>
              </div>
              <div>
                <p className="text-sm text-gray-300 mb-2">Chat With Us</p>
                <p className="font-semibold">+91 8147349242</p>
              </div>
              <div className="flex gap-4 mt-6">
                <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <MessageCircle size={20} />
                </button>
                <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <Mail size={20} />
                </button>
                <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <Phone size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 py-8">
          {/* Social Media */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold mb-4">We Accept</h4>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 px-3 py-2 rounded text-xs font-medium">
                Visa
              </div>
              <div className="bg-white/10 px-3 py-2 rounded text-xs font-medium">
                Mastercard
              </div>
              <div className="bg-white/10 px-3 py-2 rounded text-xs font-medium">
                Amex
              </div>
              <div className="bg-white/10 px-3 py-2 rounded text-xs font-medium">
                PayPal
              </div>
              <div className="bg-white/10 px-3 py-2 rounded text-xs font-medium">
                Diners Club
              </div>
              <div className="bg-white/10 px-3 py-2 rounded text-xs font-medium">
                RuPay
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-300">
          <p>© 2025 Jewelry Company Limited. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#d4a574] transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-[#d4a574] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#d4a574] transition-colors">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
