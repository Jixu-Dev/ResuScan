import React from 'react';
import { FileText, Mail } from 'lucide-react';

const PORTFOLIO_URL = "https://jixu-portfolio.vercel.app";
const CONTACT_EMAIL = "rohitgowda255@gmail.com";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <FileText className="text-blue-600 w-5 h-5" />
          <span className="font-bold text-lg text-gray-900">ResuScan</span>
        </div>
        <p className="text-gray-500 text-sm">© 2024 jixu. Built for modern careers.</p>
        <div className="flex gap-6 text-sm">
          <a href={PORTFOLIO_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600">Portfolio</a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-bold text-gray-600 hover:text-blue-600 flex items-center gap-1">
            <Mail className="w-3 h-3" /> Contact Me
          </a>
        </div>
      </div>
    </footer>
  );
}