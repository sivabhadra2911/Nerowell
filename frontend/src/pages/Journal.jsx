import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Journal() {
  const [entry, setEntry] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [sentiment, setSentiment] = useState(null);

  // Mock Sentiment Analysis
  const handleAnalyze = () => {
    if (entry.length > 10) {
      setSentiment({ mood: 'Positive', score: 8, emoji: '✨' });
    } else {
        setSentiment(null);
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8 flex justify-between items-end">
        <div>
            <h2 className="text-3xl font-bold text-slate-800">Mindful Journal</h2>
            <p className="text-slate-500 mt-2">Express your thoughts, either by typing or speaking.</p>
        </div>
        <button 
            className={`px-5 py-2.5 rounded-full font-medium flex items-center space-x-2 transition-all ${isRecording ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            onClick={() => setIsRecording(!isRecording)}
        >
            <span className="relative flex h-3 w-3">
              {isRecording && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>}
              <span className={`relative inline-flex rounded-full h-3 w-3 ${isRecording ? 'bg-red-500' : 'bg-slate-400'}`}></span>
            </span>
            <span>{isRecording ? 'Listening...' : 'Voice Journal'}</span>
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        <textarea 
            value={entry}
            onChange={(e) => {
                setEntry(e.target.value);
                handleAnalyze();
            }}
            placeholder="How are you feeling right now?"
            className="w-full h-64 p-6 text-lg text-slate-700 placeholder-slate-300 focus:outline-none resize-none"
        ></textarea>
        
        <div className="bg-slate-50 px-6 py-4 flex items-center justify-between border-t border-slate-100">
            <div className="flex items-center space-x-4">
                {sentiment ? (
                    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex items-center space-x-2 text-sm bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-lg font-medium">
                        <span>{sentiment.emoji}</span>
                        <span>AI detects a {sentiment.mood} mood</span>
                    </motion.div>
                ) : (
                    <span className="text-sm text-slate-400">AI analysis waiting for more text...</span>
                )}
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-xl font-medium shadow-sm shadow-indigo-200 transition-colors">
                Save Entry
            </button>
        </div>
      </div>
    </div>
  );
}
