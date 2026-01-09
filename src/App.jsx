import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import UploadPage from './components/UploadPage';
import ResumePage from './components/ResumePage';
import { analyzeResume } from './services/gemini';
import { XCircle, X } from 'lucide-react';

export default function App() {
  const [view, setView] = useState('home');
  const [analyzing, setAnalyzing] = useState(false);
  const [resumeData, setResumeData] = useState(null);
  const [error, setError] = useState(null);

  const handleUpload = async (fileName, text) => {
    setAnalyzing(true);
    setError(null);
    try {
      const result = await analyzeResume(fileName, text);
      setResumeData(result);
      setAnalyzing(false);
      setView('resume');
      window.scrollTo(0, 0);
    } catch (err) {
      console.error(err);
      setAnalyzing(false);
      setError("AI Service is temporarily unavailable. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900 print:bg-white">
      <Navbar currentView={view} setView={setView} />
      
      <main className="min-h-[calc(100vh-160px)]">
        {error && (
          <div className="pt-24 px-4 max-w-3xl mx-auto">
            <div className="bg-red-50 border border-red-100 text-red-700 p-6 rounded-[2rem] flex items-center gap-4">
              <XCircle className="w-6 h-6 shrink-0" />
              <p className="font-bold">{error}</p>
              <button onClick={() => setError(null)} className="ml-auto p-2 hover:bg-red-100 rounded-full">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {view === 'home' && <LandingPage setView={setView} />}
        {view === 'upload' && <UploadPage onUpload={handleUpload} analyzing={analyzing} />}
        {view === 'resume' && <ResumePage data={resumeData} setView={setView} />}
      </main>

      <Footer />
    </div>
  );
}