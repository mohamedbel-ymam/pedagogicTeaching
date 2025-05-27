import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function WaveIntro() {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReveal(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-white dark:bg-gray-800">
     
      {reveal && (
        <motion.div
          className="absolute inset-0 z-10  bg-gradient-to-t from-[#50E3C2]   to-[#4A90E2]  dark:from-[#2F855A]   dark:to-[#1E3A8A]"
        
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      )}

      {/* Text Content */}
      <div className="absolute top-1/4 w-full  z-30 px-4">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-5xl text-center md:text-6xl font-extrabold drop-shadow-lg text-white dark:text-gray-100"
        >
          METHODOLOGIE EN INFORMATIQUE
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-lg drop-shadow text-white/90 dark:text-gray-300 max-w-5xl mx-auto font-bold"
        >Notre approche pédagogique en informatique repose sur l’apprentissage par la pratique, l’autonomie progressive et la contextualisation des savoirs. Nous formons les apprenants à des compétences essentielles — bureautique, algorithmique, programmation et développement web — à travers des activités concrètes et des outils adaptés à leur niveau. Chaque module est conçu pour développer la logique, la rigueur et la créativité, tout en favorisant une compréhension durable des concepts numériques fondamentaux.
        </motion.p>
      </div>
    </section>
  );
}