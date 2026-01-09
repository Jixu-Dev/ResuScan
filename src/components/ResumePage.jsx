import React from 'react';
import { ArrowLeft, Printer, Layers, AlertTriangle, CheckCircle, ExternalLink, Mail } from 'lucide-react';

const PORTFOLIO_URL = "https://jixu-portfolio.vercel.app";
const CONTACT_EMAIL = "rohitgowda255@gmail.com";

export default function ResumePage({ data, setView }) {
  if (!data) return null;

  return (
    <div className="pt-24 pb-20 px-4 print:pt-0">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8 print:hidden">
          <button onClick={() => setView('upload')} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 font-bold transition-colors">
            <ArrowLeft className="w-5 h-5" /> Back to Upload
          </button>
          <button onClick={() => window.print()} className="flex items-center gap-2 px-5 py-2 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-all">
            <Printer className="w-4 h-4" /> Save PDF
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-3 bg-white rounded-[2.5rem] border border-gray-100 p-10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full -mr-32 -mt-32 -z-0"></div>
            <div className="relative z-10">
              <h1 className="text-4xl font-black text-gray-900 mb-6 leading-tight">Career Insight Report</h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">{data.summary}</p>
              
              <div className="flex items-center gap-3 px-6 py-4 bg-gray-50 rounded-2xl w-fit border border-gray-100">
                <AlertTriangle className={`w-5 h-5 ${data.ats_compatibility?.status === 'Critical' ? 'text-red-500' : 'text-amber-500'}`} />
                <span className="font-bold text-gray-700">ATS Status: <span className="text-blue-600">{data.ats_compatibility?.status}</span></span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center text-white">
            <div className="text-xs uppercase tracking-[0.2em] font-black opacity-50 mb-2">Score</div>
            <div className="text-8xl font-black mb-4">{data.score}</div>
            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 transition-all duration-1000" style={{ width: `${data.score}%` }}></div>
            </div>
            <p className="mt-6 text-sm text-gray-400 font-medium">Market Readiness</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
            <Layers className="text-blue-600 w-6 h-6" /> Keyword Match
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50/50 border border-green-100 p-8 rounded-[2rem]">
              <h3 className="font-black text-green-800 text-sm uppercase tracking-wider mb-4">Found in Resume</h3>
              <div className="flex flex-wrap gap-2">
                {data.keywords?.found.map((k, i) => (
                  <span key={i} className="px-4 py-2 bg-white text-green-700 rounded-xl text-sm font-bold border border-green-200">{k}</span>
                ))}
              </div>
            </div>
            <div className="bg-amber-50/50 border border-amber-100 p-8 rounded-[2rem]">
              <h3 className="font-black text-amber-800 text-sm uppercase tracking-wider mb-4">Missing Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {data.keywords?.missing.map((k, i) => (
                  <span key={i} className="px-4 py-2 bg-white text-amber-700 rounded-xl text-sm font-bold border border-amber-200">{k}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {data.details.map((detail, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] border border-gray-100 p-10 shadow-sm animate-fade-in-up">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-2xl">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900">{detail.category}</h3>
                    <p className="text-blue-600 font-bold uppercase text-xs tracking-widest">{detail.score}% Proficiency</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-10 text-lg leading-relaxed italic">"${detail.feedback}"</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <h4 className="flex items-center gap-2 font-black text-green-700 uppercase text-xs tracking-wider"><CheckCircle className="w-4 h-4" /> Strong Points</h4>
                  <ul className="space-y-4">
                    {detail.positives.map((pos, i) => (
                      <li key={i} className="flex gap-4 text-gray-600 text-sm leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0"></span>
                        {pos}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="flex items-center gap-2 font-black text-amber-700 uppercase text-xs tracking-wider"><AlertTriangle className="w-4 h-4" /> Critical Gaps</h4>
                  <ul className="space-y-4">
                    {detail.improvements.map((imp, i) => (
                      <li key={i} className="flex gap-4 text-gray-600 text-sm leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 shrink-0"></span>
                        {imp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 text-white flex flex-col md:flex-row items-center justify-between gap-10 print:hidden shadow-2xl shadow-blue-200">
          <div className="text-center md:text-left max-w-xl">
            <h2 className="text-4xl font-black mb-4">Want a hand-crafted review?</h2>
            <p className="text-blue-100 text-lg">My name is jixu. I help engineers and creatives build high-performing resumes.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a href={`mailto:${CONTACT_EMAIL}`} className="px-8 py-5 bg-white text-blue-600 rounded-2xl font-black text-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-3 active:scale-95 shadow-lg">
              Email Me <Mail className="w-6 h-6" />
            </a>
            <a href={PORTFOLIO_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-5 bg-blue-500/20 backdrop-blur-md text-white border border-white/20 rounded-2xl font-black text-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3 active:scale-95">
              Portfolio <ExternalLink className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}