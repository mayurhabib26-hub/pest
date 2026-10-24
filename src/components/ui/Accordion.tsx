import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface AccordionItemData {
  id: string;
  title: string;
  content: string | React.ReactNode;
}

interface AccordionProps {
  items: AccordionItemData[];
  defaultOpenId?: string;
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenId,
  allowMultiple = false,
  className = '',
}) => {
  const [openIds, setOpenIds] = useState<string[]>(
    defaultOpenId ? [defaultOpenId] : [items[0]?.id].filter(Boolean)
  );

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`divide-y divide-[#E3E7EF] border-y border-[#E3E7EF] ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id} className="py-4 transition-colors">
            <h3>
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                aria-expanded={isOpen}
                aria-controls={`accordion-panel-${item.id}`}
                id={`accordion-btn-${item.id}`}
                className="w-full flex items-center justify-between text-left gap-4 font-heading font-semibold text-base sm:text-lg text-[#151E4D] hover:text-[#ED1834] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED1834] focus-visible:ring-offset-2 rounded-sm"
              >
                <span>{item.title}</span>
                <span
                  className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#FFF0F2] text-[#ED1834]' : 'bg-[#EDF0F7] text-[#151E4D]'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`accordion-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`accordion-btn-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 pb-1 text-[#586174] text-sm sm:text-base leading-relaxed pr-6">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
