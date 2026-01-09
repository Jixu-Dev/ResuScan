import React from 'react';
import { Zap, ExternalLink, Upload, Cpu, Target } from 'lucide-react';

const PORTFOLIO_URL = "https://jixu-portfolio.vercel.app";

export default function LandingPage({ setView }) {
  return (
    <div className="pt-24 pb-16 overflow-hidden">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full blur-[100px]"></div>
        </div>

        <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-600/20 px-4 py-2 rounded-full text-blue-700 text-sm font-bold mb-8 animate-pulse-slow">
          <Zap className="w-4 h-4 fill-blue-700" />
          Version 2.0
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black text-gray-900 tracking-tight mb-8 leading-[0.9] animate-fade-in-up">
          Land your dream <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">job faster.</span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up">
          Stop guessing why you aren't getting callbacks. Use our Gemini-powered AI to scan your resume for ATS gaps and industry relevance in seconds.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-5 animate-fade-in-up">
          <button onClick={() => setView('upload')} className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 hover:-translate-y-1 active:scale-95">
            Check My Resume
          </button>
          <a href={PORTFOLIO_URL} target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-white text-gray-700 border border-gray-200 rounded-2xl font-bold text-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
            Portfolio <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        <div className="mt-32">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            {[
              { step: "01", icon: Upload, title: "Upload PDF", desc: "Simply drop your resume file. We only accept PDFs for precision." },
              { step: "02", icon: Cpu, title: "AI Scanning", desc: "Gemini 2.5 analyzes your content against thousands of job benchmarks." },
              { step: "03", icon: Target, title: "Get Report", desc: "See your ATS score, keyword gaps, and actionable feedback instantly." }
            ].map((item, i) => (
              <div key={i} className="group p-8 bg-gray-50 rounded-3xl border border-transparent hover:border-blue-200 hover:bg-white transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <item.icon className="text-blue-600 w-6 h-6" />
                  </div>
                  <span className="text-4xl font-black text-gray-200">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}