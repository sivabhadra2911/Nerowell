import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Journal from './pages/Journal';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex font-sans">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col">
          <div className="p-6">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 tracking-tight">NeuroWell.</h1>
            <p className="text-sm text-slate-500 mt-1">Mental Wellness AI</p>
          </div>
          <nav className="flex-1 px-4 mt-6 space-y-2">
            <Link to="/" className="block px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-700 font-medium transition-colors">
              Dashboard
            </Link>
            <Link to="/journal" className="block px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-700 font-medium transition-colors">
              Journal & Voice
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/journal" element={<Journal />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;