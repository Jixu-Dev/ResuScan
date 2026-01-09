import React, { useState, useRef } from 'react';
import { Upload, Zap, Shield } from 'lucide-react';

export default function UploadPage({ onUpload, analyzing }) {
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const handleFiles = (files) => {
    if (files && files[0]) {
      const file = files[0];
      if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
        onUpload(file.name, "Resume text content extracted from " + file.name);
      } else {
        alert("Please upload a PDF file.");
      }
    }
  };

  if (analyzing) {
    return (
      <div className="pt-32 pb-20 flex flex-col items-center justify-center text-center px-4">
        <div className="w-24 h-24 relative mb-8">
          <div className="absolute inset-0 border-4 border-blue-100 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
          <Zap className="absolute inset-0 m-auto text-blue-600 w-10 h-10 animate-pulse" />
        </div>
        <h2 className="text-3xl font-black text-gray-900 mb-2">Engaging AI Engine</h2>
        <p className="text-gray-500">Cross-referencing your profile with market trends...</p>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-4 max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-black text-gray-900 mb-3 tracking-tight">Ready for a checkup?</h2>
        <p className="text-gray-500">Your privacy is important. Files are processed securely.</p>
      </div>

      <div 
        className={`relative border-2 border-dashed rounded-[2rem] p-16 transition-all text-center group cursor-pointer ${
          dragActive ? 'border-blue-600 bg-blue-50/50 scale-[1.02]' : 'border-gray-200 bg-white hover:border-blue-400'
        }`}
        onDragEnter={() => setDragActive(true)}
        onDragLeave={() => setDragActive(false)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); setDragActive(false); handleFiles(e.dataTransfer.files); }}
        onClick={() => fileInputRef.current.click()}
      >
        <input ref={fileInputRef} type="file" className="hidden" accept=".pdf" onChange={(e) => handleFiles(e.target.files)} />
        <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
          <Upload className="text-blue-600 w-10 h-10" />
        </div>
        <p className="text-2xl font-bold text-gray-900">Drag & drop your resume</p>
        <p className="text-gray-400 mt-2">PDF format only (Max 10MB)</p>
        <button className="mt-8 px-8 py-3 bg-gray-900 text-white rounded-2xl font-bold hover:bg-black transition-all">
          Browse File
        </button>
      </div>
    </div>
  );
}