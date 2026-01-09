export const analyzeResume = async (fileName, textContent) => {
  // Using import.meta.env for Vite environment variables
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY; 
  
  if (!apiKey) {
    throw new Error("Gemini API Key is missing. Please check your .env file or Vercel settings.");
  }

  const systemPrompt = `
    You are an expert ATS (Applicant Tracking System) and HR professional. 
    Analyze the provided resume text and return a structured JSON response.
    Evaluate based on clarity, formatting, impact, and standard industry expectations.
    
    The response MUST be a JSON object with this structure:
    {
      "score": number (0-100),
      "summary": "A 2-3 sentence overview of the candidate's profile.",
      "ats_compatibility": {
        "status": "Good" | "Warning" | "Critical",
        "message": "Brief feedback on ATS readability."
      },
      "keywords": {
        "found": ["Skill 1", "Skill 2"],
        "missing": ["Recommended Skill 1", "Recommended Skill 2"]
      },
      "details": [
        {
          "category": "Experience",
          "score": number,
          "feedback": "...",
          "positives": ["...", "..."],
          "improvements": ["...", "..."]
        },
        {
          "category": "Skills",
          "score": number,
          "feedback": "...",
          "positives": ["...", "..."],
          "improvements": ["...", "..."]
        },
        {
          "category": "Formatting",
          "score": number,
          "feedback": "...",
          "positives": ["...", "..."],
          "improvements": ["...", "..."]
        }
      ]
    }
  `;

  const userQuery = `Resume Filename: ${fileName}\n\nContent:\n${textContent}`;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: userQuery }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] },
        generationConfig: { responseMimeType: "application/json" }
      })
    });

    if (!response.ok) throw new Error('Failed to analyze resume');
    const result = await response.json();
    return JSON.parse(result.candidates[0].content.parts[0].text);
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};