import React from 'react';
import { Shuffle, Sparkles } from 'lucide-react';
import { QuoteCard } from './components/QuoteCard';
import { CategoryFilter } from './components/CategoryFilter';
import { useQuotes } from './hooks/useQuotes';

function App() {
  const {
    currentQuote,
    isAnimating,
    selectedCategory,
    isCopied,
    generateNewQuote,
    copyToClipboard,
    setSelectedCategory
  } = useQuotes();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="text-yellow-300" size={32} />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Quote Generator
            </h1>
            <Sparkles className="text-yellow-300" size={32} />
          </div>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Discover inspiration with our curated collection of powerful quotes from great minds
          </p>
        </header>

        {/* Category Filter */}
        <CategoryFilter 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Quote Card */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-4xl">
            <QuoteCard 
              quote={currentQuote}
              isAnimating={isAnimating}
              onCopy={copyToClipboard}
              isCopied={isCopied}
            />
          </div>
        </div>

        {/* Generate Button */}
        <div className="text-center mt-12">
          <button
            onClick={generateNewQuote}
            disabled={isAnimating}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-indigo-600 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Shuffle className={`transition-transform duration-300 ${isAnimating ? 'animate-spin' : 'group-hover:rotate-180'}`} size={20} />
            {isAnimating ? 'Generating...' : 'Generate New Quote'}
          </button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-white/60">
          <p className="text-sm">
            Created with ❤️ • {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;