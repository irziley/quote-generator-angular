import React from 'react';
import { categories } from '../data/quotes';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  selectedCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-200 capitalize ${
            selectedCategory === category
              ? 'bg-white text-indigo-600 shadow-lg scale-105'
              : 'bg-white/20 text-white hover:bg-white/30 hover:scale-105'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};