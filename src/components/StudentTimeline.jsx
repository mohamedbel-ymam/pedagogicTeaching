import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    year: 'Septembre 2023 -Janvier 2023',
    title: 'les outils bureautiques ',
    description: "Introduction et application du Word Excel et Powerpoint et motivation à l'eveil de la recherche scientifique pour les nouveaux étudiants"
  },
  {
    year: 'Janvier 2023 -Juin 2023',
    title: 'Les algorithmes',
    description: "Introduction à l'interpretation des pseudo-code avec des problémes à difficultés ascendante"
  },
  {
    year: 'Septembre 2024 -Janvier 2024',
    title: 'Les outils bureautiques',
    description: "Introduction et application du Word Excel et Powerpoint et motivation à l'eveil de la recherche scientifique pour les nouveaux étudiants"  
},
    {
        year: 'Janvier 2024 -Aout 2024',
        title: 'Developpement Web',
        description: "Initiation aux developpement web avec Html et Css et le Javascript et création des maquettes front-end"  
    },
  {
    year: 'Septembre 2025 -Janvier 2025',
    title: 'Les outils bureautique',
    description: "Introduction et application du Word Excel et Powerpoint et motivation à l'eveil de la recherche scientifique pour les nouveaux étudiants"
  },
  {
    year: 'Janvier 2025 - Mai 2025',
    title: 'la Programmation Visuelle',
    description: "L'experience avec la programmation visuelle avec alice 3 visualiser les procedure grace à des blocs de code déja préte"
  },
  {
    year: 'Mai 2025 - Juillet 2025',
    title: 'Programmation avec Python',
    description: 'Introduction à python: variables,boucles,condition,fonction bibliothéque turtle'
  }
];

export default function StudentTimeline() {
    return (
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">Student Progress Timeline</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1 bg-gray-200 dark:bg-gray-700 h-full w-1"></div>
  
            {/* Milestone items with animation */}
            <ul className="space-y-12">
              {milestones.map((item, idx) => (
                <motion.li
                  key={idx}
                  className="relative flex items-center justify-between w-full"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: idx % 2 === 0 ? -100 : 100 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: idx * 0.3 } },
                  }}
                >
                  <div className={`order-${idx % 2 === 0 ? '1' : '2'} w-5/12`}>
                    <div className="text-center">
                      <span className="text-2xl font-semibold text-[#4A90E2] dark:text-[#A5B4FC]">{item.year}</span>
                    </div>
                  </div>
                  <motion.div
                    className="bg-[#F5A623] dark:bg-[#FDE68A] rounded-full h-6 w-6 z-10"
                    animate={{ scale: [0.8, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  />
                  <div className={`order-${idx % 2 === 0 ? '2' : '1'} w-5/12  bg-gradient-to-tl 
                                 from-[#50E3C2] to-[#4A90E2] 
                                 dark:from-[#2F855A] dark:to-[#1E3A8A] p-6 rounded-lg shadow-lg`}>                  
                    <h3 className="text-xl font-bold mb-  text-gray-800 dark:text-gray-100">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
}
