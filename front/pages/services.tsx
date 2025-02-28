


import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { WrenchScrewdriverIcon, ShieldCheckIcon, BoltIcon, TruckIcon, HeartIcon } from "@heroicons/react/24/solid";
import top1 from "../public/top1.jpg";
import top2 from "../public/top2.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 120 
    }
  }
};

const hoverEffect = {
  scale: 1.02,
  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)"
};

const services = [
  {
    title: "Maintenance Professionnelle",
    description: "Nous offrons un service de maintenance fiable pour assurer la longévité de vos équipements.",
    icon: <WrenchScrewdriverIcon className="w-10 h-10 text-blue-600" />,
    image: top1,
  },
  {
    title: "Sécurité Garantie",
    description: "Nos services sont conçus pour offrir une protection optimale à vos biens et équipements.",
    icon: <ShieldCheckIcon className="w-10 h-10 text-green-600" />,
    image: top2,
  },
  {
    title: "Intervention Rapide",
    description: "Nous garantissons une prise en charge rapide et efficace de vos besoins urgents.",
    icon: <BoltIcon className="w-10 h-10 text-yellow-500" />,
    image: top1,
  },
  {
    title: "Livraison Express",
    description: "Un service de livraison rapide et sécurisé pour tous vos équipements.",
    icon: <TruckIcon className="w-10 h-10 text-red-600" />,
    image: top2,
  },
  {
    title: "Support Client 24/7",
    description: "Une assistance dédiée et disponible en permanence pour répondre à toutes vos questions.",
    icon: <HeartIcon className="w-10 h-10 text-pink-600" />,
    image: top1,
  },
];


export default function Services() {
  return (
    <section id="services" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Nos Services <span className="text-blue-800">Exceptionnels</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg lg:text-xl">
            Découvrez notre gamme de services premium conçus pour répondre à tous vos besoins techniques.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={hoverEffect}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-2 relative overflow-hidden"
            >
              <motion.div 
                className="relative aspect-video w-full bg-gray-100"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-300 group-hover:opacity-90"
                  placeholder="blur"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
              </motion.div>
              
              <div className="p-6 md:p-8 flex flex-col h-full">
                <div className="mb-4 flex items-start gap-4">
                  <motion.div 
                    className="p-3 bg-blue-50 rounded-xl shadow-sm"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring" }}
                  >
                    {React.cloneElement(service.icon, { className: "w-8 h-8" })}
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-1">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-base md:text-lg mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <motion.button
                    aria-label={`En savoir plus sur ${service.title}`}
                    className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 transform hover:scale-[1.02]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    En savoir plus
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}