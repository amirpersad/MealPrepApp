// components/RecipeCard.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
export type Recipe = {
  id: string;
  title: string;
  image: string;
  summary: string;
  nutrition?: {
    nutrients: {
      name: string;
      amount: number;
    }[];
  };
};

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  const [isOpen, setIsOpen] = useState(false);
  const calories = recipe.nutrition?.nutrients
  ? Math.ceil(recipe.nutrition.nutrients.find(n => n.name === "Calories")?.amount ?? 0)
  : "N/A";
  const protein = recipe.nutrition?.nutrients
  ? Math.ceil(recipe.nutrition.nutrients.find(n => n.name === "Protein")?.amount ?? 0)
  : "N/A";
  const carbs = recipe.nutrition?.nutrients
  ? Math.ceil(recipe.nutrition.nutrients.find(n => n.name === "Carbohydrates")?.amount ?? 0)
  : "N/A";
  const fat = recipe.nutrition?.nutrients
  ? Math.ceil(recipe.nutrition.nutrients.find(n => n.name === "Fat")?.amount ?? 0)
  : "N/A";
   

  return (
    <>
      {/* Thumbnail card (closed state) */}
      <motion.div
        layoutId={`card-${recipe.id}`}
        onClick={() => setIsOpen(true)}
        className="bg-slate-50 rounded-xl overflow-hidden shadow-lg cursor-pointer w-full max-w-sm mx-auto"
      >
        <motion.img
          layoutId={`image-${recipe.title}`}
          src={recipe.image}
          alt={recipe.title}
          className="h-48 w-full object-cover"
        />
        <div className="p-4">
          <motion.h2 layoutId={`title-${recipe.title}`} className="text-lg text-center font-semibold text-gray-800">
            {recipe.title}
          </motion.h2>
          <div className="nutrient-info text-center">
            <p>Calories: {calories} kcals</p>
            <p>Protein: {protein} g</p>
            <p>Carbohydrates: {carbs} g</p>
            <p>Fats: {fat} g</p>
          </div>
        </div>
      </motion.div>

      {/* Expanded card (open state) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layoutId={`card-${recipe.title}`}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              layoutId={`card-${recipe.title}`}
              className="bg-slate-50 rounded-2xl shadow-2xl overflow-hidden max-w-2xl w-full mx-4"
              onClick={(e) => e.stopPropagation()} // prevent click from closing
            >
              <motion.img
                layoutId={`image-${recipe.title}`}
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <motion.h2 layoutId={`title-${recipe.title}`} className="text-2xl font-bold text-gray-800">
                  {recipe.title}
                </motion.h2>
                <p className="mt-4 text-gray-700 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: recipe.summary }}/>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RecipeCard;