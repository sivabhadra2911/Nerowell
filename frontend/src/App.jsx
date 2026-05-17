import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Journal from './pages/Journal';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthProvider, AuthContext } from './context/AuthContext';

function ProtectedRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  if (loading) return <div>Loading...</div>;
  return user ? children : <Navigate to="/login" />;
}

function MainLayout({ children }) {
  const { logout } = useContext(AuthContext);
  return (
    <div className="min-h-screen bg-slate-50 flex font-sans w-full">
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
        <div className="p-4 border-t border-slate-200">
          <button onClick={logout} className="w-full py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg font-medium transition-colors">
            Log Out
          </button>
        </div>
      </aside>
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={
            <ProtectedRoute>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </ProtectedRoute>
          } />
          <Route path="/journal" element={
            <ProtectedRoute>
              <MainLayout>
                <Journal />
              </MainLayout>
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;