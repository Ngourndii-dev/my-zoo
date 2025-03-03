export const Footer = () => {
  return (
    <footer className="bg-black text-white flex-1">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">PawsCare</h3>
            <p className="text-gray-300">
              Specialists in paw care for wild and exotic animals since 2019
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Paw Care</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Prevention</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Emergencies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Legal Notice</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="text-gray-300 space-y-2">
              <p>123 Animal Street</p>
              <p>75000 ZooCity</p>
              <p>Phone: +261 38 700 5929</p>
              <p>Email: <a href="mailto:contact@pawscarezoo.com" className="hover:text-white transition-colors">contact@pawscarezoo.com</a></p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-900 mt-8 pt-4 text-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} PawsCare - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
