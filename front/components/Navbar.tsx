import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../public/me not alone.png"
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 to-blue-950 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-12">
        <span className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
          Paw Care
          <div className="text-blue-400 w-12 h-12"> 
            <Image 
              src={logo} 
              alt="Logo" 
              className="w-full h-full object-contain" 
            />
          </div>
        </span>
        </div>

        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="#" className="text-gray-300 hover:text-white font-medium transition duration-300
                           relative after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-0.5 
                           after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
              >
              About
            </a>
          </li>
           <li>
           <a href="#sales" className="text-gray-300 hover:text-white font-medium transition duration-300
                          relative after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-0.5 
                          after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
             >
             Sales
           </a>
         </li>
          <li>
          <a href="#services" className="text-gray-300 hover:text-white font-medium transition duration-300
                         relative after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-0.5 
                         after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
            >
            Services
          </a>
        </li>
         <li>
         <a href="#contact" className="text-gray-300 hover:text-white font-medium transition duration-300
                        relative after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-0.5 
                        after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
           >
           Contact
         </a>
       </li>
        </ul>

        <div className="hidden md:flex">
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 font-semibold">
            Book an Appointment
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900 text-white py-4 space-y-4">
          {["About", "Sales", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="block text-center text-blue-400 hover:text-white font-medium"
            >
              {item}
            </a>
          ))}
          <div className="text-center">
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg shadow-md transition font-semibold">
              Book an Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
