import React from 'react';

const resources = [
  {
    title: 'RoboMind',
    description: "Apprendre les bases de programmation avec une similation d'robot virtuel Learn basic programming through virtual robot simulation.",
    url: 'https://www.robomind.net/en/index.html',
  },
  {
    title: 'W3Schools',
    description: 'Tutoriels interactives pour HTML, CSS, JavaScript, ett plus.',
    url: 'https://www.w3schools.com/',
  },
  {
    title: 'Python.org',
    description: 'Le site officiel pour les tutoriels Python, docs et telechargements.',
    url: 'https://www.python.org/',
  },
  {
    title: 'Alice 3',
    description: 'Apprendre la programmation avec des animations 3D et des Histoire et scenes.',
    url: 'https://www.alice.org/',
  },
  {
    title: 'Pratique Pseudocode',
    description: "Pratique d'écrire et comprendre le pseudocode.",
    url: 'https://www.geeksforgeeks.org/fundamentals-of-algorithms/', 
  },
];

export default function Resources() {
  return (
    <section className="min-h-screen py-12 px-6 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Resources d'enseignant
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 flex flex-col justify-between transition hover:scale-105 duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {resource.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 flex-grow">
                {resource.description}
              </p>
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition"
              >
                Visit Site
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}