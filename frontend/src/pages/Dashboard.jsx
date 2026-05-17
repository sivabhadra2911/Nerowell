import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockMoodData = [
  { day: 'Mon', score: 6 },
  { day: 'Tue', score: 8 },
  { day: 'Wed', score: 7 },
  { day: 'Thu', score: 9 },
  { day: 'Fri', score: 7 },
  { day: 'Sat', score: 8 },
  { day: 'Sun', score: 9 },
];

export default function Dashboard() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold text-slate-800">Good Morning, Alex 👋</h2>
        <p className="text-slate-500 mt-2">Here is your wellness summary for today.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Stat Cards */}
        <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
            <div>
                <p className="text-sm font-medium text-slate-500">Current Mood</p>
                <h3 className="text-2xl font-bold text-slate-800 mt-1">Calm 😌</h3>
            </div>
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 text-xl font-bold">8</div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
            <div>
                <p className="text-sm font-medium text-slate-500">Journal Streak</p>
                <h3 className="text-2xl font-bold text-slate-800 mt-1">12 Days 🔥</h3>
            </div>
            <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-xl font-bold">12</div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-2xl shadow-md text-white">
            <p className="text-indigo-100 text-sm font-medium">AI Insight</p>
            <h3 className="text-lg font-semibold mt-2 leading-tight">Your mood is remarkably stable this week. Keep up the good sleep routine!</h3>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Weekly Mood Analytics</h3>
            <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={mockMoodData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                        <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} domain={[0, 10]} />
                        <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}/>
                        <Line type="monotone" dataKey="score" stroke="#6366f1" strokeWidth={4} dot={{ r: 6, fill: '#6366f1', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>

        <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-4">Recommended for You</h3>
                <ul className="space-y-4">
                    <li className="flex items-center space-x-4 p-3 bg-slate-50 rounded-xl">
                        <div className="h-10 w-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">🚶</div>
                        <div>
                            <p className="font-semibold text-slate-800 text-sm">15 Min Walk</p>
                            <p className="text-xs text-slate-500">Boosts serotonin</p>
                        </div>
                    </li>
                    <li className="flex items-center space-x-4 p-3 bg-slate-50 rounded-xl">
                        <div className="h-10 w-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">🧘</div>
                        <div>
                            <p className="font-semibold text-slate-800 text-sm">Deep Breathing</p>
                            <p className="text-xs text-slate-500">Reduces anxiety</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}
