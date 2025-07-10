import React from 'react';
import { Quote as QuoteIcon, Copy, Check } from 'lucide-react';
import { Quote } from '../data/quotes';

interface QuoteCardProps {
  quote: Quote;
  isAnimating: boolean;
  onCopy: () => void;
  isCopied: boolean;
}

export const QuoteCard: React.FC<QuoteCardProps> = ({ 
  quote, 
  isAnimating, 
  onCopy, 
  isCopied 
}) => {
  return (
    <div className={`relative overflow-hidden transition-all duration-500 ${
      isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
    }`}>
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border border-white/20">
        <div className="flex items-start justify-between mb-6">
          <QuoteIcon className="text-indigo-500 flex-shrink-0" size={32} />
          <button
            onClick={onCopy}
            className="group flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            {isCopied ? (
              <>
                <Check size={16} />
                <span className="text-sm font-medium">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span className="text-sm font-medium">Copy</span>
              </>
            )}
          </button>
        </div>
        
        <blockquote className="text-gray-800 text-xl md:text-2xl font-medium leading-relaxed mb-8">
          "{quote.text}"
        </blockquote>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-lg font-semibold">— {quote.author}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium capitalize">
              {quote.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};