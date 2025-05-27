import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Carousel from '../components/carousel';


const topics = [
  {
    title: "Les outils bureautique",
    description: "La maîtrise des outils bureautiques (Word, Excel) permet aux apprenants de structurer et de communiquer l’information efficacement. Nous enseignons la création de documents et de tableaux en prenant des cas concrets, en privilégiant l’apprentissage actif. Les compétences visées incluent la rédaction formelle la recherche scientifique, la mise en page et l’analyse de données simples avec des travaux pratiques guidés.",
    icon: "📊",
    lien: "https://www.abc-formationcontinue-blog.com/wp-content/uploads/2022/03/Trame-Blog-57-768x591.png"
  },
  {
    title: "La programmation visuelle et Algorithmes",
    description: "Alice 3 permet d’initier la programmation par une interface visuelle ludique. Les apprenants créent facilement des animations 3D en organisant des blocs de code : ils écrivent des scénarios en manipulant graphiquement des variables et des fonctions. Les compétences visées sont la pensée algorithmique et la créativité. Nous guidons a travers alice et les algorithmes les apprenants pour la résolution de problèmes simples par l’écriture de pseudo-code ou de schémas logiques et à prendre des decisions.",
    icon: "🧩",
    lien: "https://adfaber.org/wp-content/uploads/2021/09/alice-adfaber-featured-image.png"
  },
  {
    title: "Front-End Development",
    description: "Le développement web initie les apprenants aux langages du Web (HTML, CSS) et aux bases du design. Nous les guidons pas à pas pour créer des pages et sites simples, en mettant l’accent sur l’utilité pratique dont ils créent des maquettes front-end. Les compétences visées comprennent la structuration du contenu, la mise en forme visuelle et la navigation Web.",
    icon: "💻",
    lien: "https://media.licdn.com/dms/image/v2/C4D12AQHSTCo4OT0npw/article-cover_image-shrink_423_752/article-cover_image-shrink_423_752/0/1651218312496?e=1753920000&v=beta&t=Eb_eQhoLnWZNA0kT1qw_5iEiOvVs_Q4hH_1EneLzxZk"
  },
  {
    title: "La programmation avec python",
    description: "Python c'est notre défi cet été dont en va guidé les apprenants pour apprendre à programmer avec Python les variables, structures de données et fonctions à travers des exercices progressifs, par exemple en créant un petit jeu ou en analysant un jeu de données. Les compétences visées vont de l’automatisation à la résolution de problèmes complexes",
    icon: "🐍",
    lien: "https://www.netacad.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/407c875e-1b8b-11ec-9621-0242ac130003/image.png?ut=1619654083258"
  },
];
export default function Methodology() {
  return (
    <div className="min-h-screen 
                  bg-gradient-to-br from-yellow-300 to-yellow-100 
                   dark:from-[#2F855A]   dark:to-[#1E3A8A]
                    p-10  ">
      <h1 className=" text-amber-700 text-4xl font-bold text-center mb-6 
                     dark:text-white w-100% h-100%" >Le materiel éducatif utilisées dans l'établissement </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {topics.map((topic, index) => (
          <Card key={index} className="bg-gradient-to-bl from-[#50E3C2] to-[#4A90E2]   
              dark:from-[#2F855A] dark:to-[#1E3A8A]
              border-l-4 border-[#F5A623]                     
              dark:border-[#FDE68A] 
               shadow-lg hover:shadow-xl
              transition-all duration-300 ease-in-out
              rounded-2xl
               hover:scale-105 
               ">
            <CardContent className="p-4 space-y-4">
              <div className="text-5xl text-white dark:text-gray-100 text-center p-4">{topic.icon}</div>
              <h2 className="text-xl
                             text-white
                              dark:text-gray-100 
                              text-center 
                             font-bold
                             p-2">{topic.title}</h2>
              <p className="text-white/90 dark:text-gray-300 text-center font-semibold p-2">{topic.description}</p>
              <img className="w-full rounded-lg mt-2 ring-2 ring-white/50 dark:ring-gray-700" src={topic.lien} alt="" />
            </CardContent>
          </Card>
        ))}
      </div>
      <div>
        <h2 className='text-3xl font-bold p-4 text-center text-amber-700 dark:text-white'>Projet creer par les etudiants</h2>
        <Carousel />

      </div>
    </div>
  );
}

