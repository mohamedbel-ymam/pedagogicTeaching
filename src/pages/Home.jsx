import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import WaveIntro from '../components/WaveIntro';
import StudentTimeline from '../components/StudentTimeline';



export default function Home() {

  const { ref, inView } = useInView({ triggerOnce: true });
 

  return (
    
    <div className="font-(family-name:--Kanit, sans-serif) bg-white min-h-screen dark:bg-gray-900 text-center text-bold ">
      <WaveIntro />

         
      
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-1 gap-8 m-4"
      >
        <div className="bg-white text-gray-900 border-l-4 border-t-4 border-r-4  border-[#50E3C2] dark:bg-gray-900 dark:text-gray-200 dark:border-[#2F855A] p-8 rounded-lg  shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.5)]">
          <h2 className="text-3xl font-semibold mb-4 text-[#4A90E2] dark:text-[#b2bbd3]"> Articulation Théorie/Pratique</h2>
          <p className="text-[#0b3e77] dark:text-[#b2bbd3] text-2xl">
            Avec de la programmation visuelle les algorithmes deviennent des jeux sérieux. Les structures de données s'animent. Chaque théorie est liée à un objet technologique quotidien.   
          </p>
        </div>

        
      </motion.div>

      <motion.div 
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-8 m-4"
      >
        <div className="bg-white text-gray-900 border-l-4 border-b-4 border-[#50E3C2] dark:bg-gray-900 dark:text-gray-200 dark:border-[#2F855A] p-8 rounded-lg shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] dark:shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.5)]  ">
          <h2 className="text-2xl font-semibold mb-4 text-[#4A90E2] dark:text-[#b2bbd3]">Apprentissage Actif par la Pratique</h2>
          <p className=" text-[#0b3e77] dark:text-[#b2bbd3] text-2xl">
             Dès le premier cours, les élèves codent. Chaque concept est appliqué via des micro-projets concrets. L'erreur devient un outil d'apprentissage. Autonomie progressive avec Alice3 ➔ Algobox ➔ Python.
          </p>
        </div>

        <div className="bg-white text-gray-900 border-r-4 border-b-4 border-[#50E3C2] dark:bg-gray-900 dark:text-gray-200 dark:border-[#2F855A] p-8 rounded-lg shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] dark:shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.5)] ">
          <h2 className="text-2xl font-semibold mb-4text-[#4A90E2] text-[#4A90E2] dark:text-[#b2bbd3]">Projets Concrets en Équipe</h2>
          <p className=" text-[#0b3e77] dark:text-[#b2bbd3] text-2xl">  
          Simulations professionnelles : création d'applis métiers, automatisation Excel. Méthodologie Agile avec GitHub. Évaluation par pairs et rétroactions structurées."
          </p>
        </div>
      </motion.div>
                 
        <StudentTimeline/>
    </div>
  );
}