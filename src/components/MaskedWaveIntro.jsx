import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import maskUrl from '../assets/kids-child-svgrepo-com.svg'; // adjust path as needed
import WaveIntro from './WaveIntro';

export default function MaskedWave() {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReveal(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/school-photo.jpg')" }}
      />

      {/* Masked color reveal */}
      {reveal && (
        <motion.div
          className="absolute inset-0 z-20 bg-blue-600 dark:bg-blue-900"
          style={{
            WebkitMask: `url(${maskUrl}) no-repeat center bottom / contain`,
            mask:          `url(${maskUrl}) no-repeat center bottom / contain`
          }}
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      )}

      {/* Underlying wave shape (optional) */}
      <WaveIntro className="z-30" />

      {/* Intro Text */}
      <div className="absolute top-1/3 w-full text-center z-40 px-4">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
          Welcome to My Pedagogic Methodology
        </h1>
        <p className="mt-4 text-lg text-white drop-shadow">
          From basics to mastery—watch knowledge in motion.
        </p>
      </div>
    </section>
  );
}