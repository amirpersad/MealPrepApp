// components/ExpandableCard.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface ExpandableCardProps {
  title: string;
  description: string;
  imageUrl: string;
  content: string;
}

const ExpandableCard = ({ title, description, imageUrl, content }: ExpandableCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Thumbnail card (closed state) */}
      <motion.div
        layoutId={`card-${title}`}
        onClick={() => setIsOpen(true)}
        className="bg-slate-50 rounded-xl overflow-hidden shadow-lg cursor-pointer w-full max-w-sm mx-auto"
      >
        <motion.img
          layoutId={`image-${title}`}
          src={imageUrl}
          alt={title}
          className="h-48 w-full object-cover"
        />
        <div className="p-4">
          <motion.h2 layoutId={`title-${title}`} className="text-lg font-semibold text-gray-800">
            {title}
          </motion.h2>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </motion.div>

      {/* Expanded card (open state) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layoutId={`card-${title}`}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              layoutId={`card-${title}`}
              className="bg-slate-50 rounded-2xl shadow-2xl overflow-hidden max-w-2xl w-full mx-4"
              onClick={(e) => e.stopPropagation()} // prevent click from closing
            >
              <motion.img
                layoutId={`image-${title}`}
                src={imageUrl}
                alt={title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <motion.h2 layoutId={`title-${title}`} className="text-2xl font-bold text-gray-800">
                  {title}
                </motion.h2>
                <p className="mt-4 text-gray-700 text-sm leading-relaxed">{content}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExpandableCard;