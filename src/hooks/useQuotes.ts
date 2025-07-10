import { useState, useEffect } from 'react';
import { Quote, quotes } from '../data/quotes';

export const useQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState<Quote>(quotes[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isCopied, setIsCopied] = useState(false);

  const filteredQuotes = selectedCategory === 'all' 
    ? quotes 
    : quotes.filter(quote => quote.category === selectedCategory);

  const generateNewQuote = () => {
    setIsAnimating(true);
    
    setTimeout(() => {
      const availableQuotes = filteredQuotes.filter(quote => quote.id !== currentQuote.id);
      const randomIndex = Math.floor(Math.random() * availableQuotes.length);
      setCurrentQuote(availableQuotes[randomIndex] || filteredQuotes[0]);
      setIsAnimating(false);
    }, 250);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`"${currentQuote.text}" — ${currentQuote.author}`);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  useEffect(() => {
    // Update current quote when category changes
    if (!filteredQuotes.find(quote => quote.id === currentQuote.id)) {
      setCurrentQuote(filteredQuotes[0]);
    }
  }, [selectedCategory, filteredQuotes, currentQuote.id]);

  return {
    currentQuote,
    isAnimating,
    selectedCategory,
    isCopied,
    generateNewQuote,
    copyToClipboard,
    setSelectedCategory
  };
};