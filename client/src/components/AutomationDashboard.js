import React, { useState, useEffect } from 'react';
import { Activity, Zap, TrendingUp, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const AutomationDashboard = () => {
  const [metrics, setMetrics] = useState({
    activeWorkflows: 24,
    tasksCompleted: 1847,
    timeSaved: 156,
    efficiency: 94
  });

  const [activities] = useState([
    { id: 1, type: 'workflow', name: 'Data Processing Pipeline', status: 'running', time: '2 min ago' },
    { id: 2, type: 'task', name: 'Email Campaign Automation', status: 'completed', time: '5 min ago' },
    { id: 3, type: 'workflow', name: 'Customer Onboarding', status: 'running', time: '8 min ago' },
    { id: 4, type: 'task', name: 'Report Generation', status: 'completed', time: '12 min ago' }
  ]);

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-amber-500/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Live Automation
            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent"> Dashboard</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Monitor your automated workflows in real-time and see the impact on your business efficiency
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/40 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-bold text-white">{metrics.activeWorkflows}</span>
            </div>
            <h3 className="text-yellow-400 font-semibold mb-1">Active Workflows</h3>
            <p className="text-gray-400 text-sm">Running automations</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/40 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-bold text-white">{metrics.tasksCompleted.toLocaleString()}</span>
            </div>
            <h3 className="text-yellow-400 font-semibold mb-1">Tasks Completed</h3>
            <p className="text-gray-400 text-sm">This month</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/40 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-bold text-white">{metrics.timeSaved}h</span>
            </div>
            <h3 className="text-yellow-400 font-semibold mb-1">Time Saved</h3>
            <p className="text-gray-400 text-sm">This week</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/40 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-bold text-white">{metrics.efficiency}%</span>
            </div>
            <h3 className="text-yellow-400 font-semibold mb-1">Efficiency</h3>
            <p className="text-gray-400 text-sm">Overall performance</p>
          </div>
        </div>

        {/* Live Activity Feed */}
        <div className="bg-gray-800/30 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white flex items-center">
              <Activity className="w-6 h-6 text-yellow-400 mr-3" />
              Live Activity Feed
            </h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">Live</span>
            </div>
          </div>

          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg border border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${activity.status === 'running' ? 'bg-yellow-400 animate-pulse' : 'bg-green-500'}`}></div>
                  <div>
                    <h4 className="text-white font-medium">{activity.name}</h4>
                    <p className="text-gray-400 text-sm capitalize">{activity.type} • {activity.time}</p>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  activity.status === 'running' 
                    ? 'bg-yellow-500/20 text-yellow-400' 
                    : 'bg-green-500/20 text-green-400'
                }`}>
                  {activity.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationDashboard;