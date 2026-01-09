import React, { useState } from 'react';
import { FileText, Menu, X, ExternalLink } from 'lucide-react';

const PORTFOLIO_URL = "https://jixu-portfolio.vercel.app";

export default function Navbar({ currentView, setView }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => setView('home')}>
            <div className="bg-blue-600 p-1.5 rounded-lg group-hover:scale-110 transition-transform">
              <FileText className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">Resu<span className="text-blue-600">Scan</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => setView('home')} className={`text-sm font-medium ${currentView === 'home' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>
              Home
            </button>
            <a href={PORTFOLIO_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-600 hover:text-blue-600 flex items-center gap-1">
              Portfolio <ExternalLink className="w-3 h-3" />
            </a>
            <button onClick={() => setView('upload')} className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:-translate-y-0.5 active:scale-95">
              Analyze Resume
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 py-4 space-y-3 shadow-xl">
          <button onClick={() => { setView('home'); setIsOpen(false); }} className={`block w-full text-left px-4 py-2 ${currentView === 'home' ? 'text-blue-600 font-bold' : 'text-gray-600'}`}>
            Home
          </button>
          <a href={PORTFOLIO_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-4 py-2 text-gray-600">
            Portfolio <ExternalLink className="w-4 h-4" />
          </a>
          <button onClick={() => { setView('upload'); setIsOpen(false); }} className="block w-full bg-blue-600 text-white px-4 py-3 rounded-xl text-center font-bold">
            Analyze Resume
          </button>
        </div>
      )}
    </nav>
  );
}