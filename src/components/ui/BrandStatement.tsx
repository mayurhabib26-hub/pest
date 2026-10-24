import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface BrandStatementProps {
  className?: string;
}

export const BrandStatement: React.FC<BrandStatementProps> = ({ className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  const phrase = 'Targeted, science-backed pest protection built for Hyderabad residences and commercial facilities.';
  const words = phrase.split(' ');

  if (shouldReduceMotion) {
    return (
      <div className={`text-center max-w-3xl mx-auto ${className}`}>
        <p className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-[#151E4D] leading-snug">
          {phrase}
        </p>
      </div>
    );
  }

  return (
    <div className={`text-center max-w-3xl mx-auto px-4 ${className}`}>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        transition={{ staggerChildren: 0.04 }}
        className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-[#151E4D] leading-snug flex flex-wrap justify-center gap-x-2 gap-y-1"
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
            }}
            className={word.toLowerCase().includes('hyderabad') ? 'text-[#ED1834]' : ''}
          >
            {word}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};
