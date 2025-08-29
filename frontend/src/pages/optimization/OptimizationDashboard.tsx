import React from 'react';
import { aiRecommendations } from '../../services/mock-data';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const forecastData = [
    { name: 'Jan', forecast: 400, actual: 380 },
    { name: 'Feb', forecast: 300, actual: 320 },
    { name: 'Mar', forecast: 500, actual: 480 },
    { name: 'Apr', forecast: 450, actual: 460 },
    { name: 'May', forecast: 470, actual: 470 },
    { name: 'Jun', forecast: 600, actual: 580 },
];

const OptimizationDashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-700">Scenario Modeling</h3>
          <p className="text-sm text-gray-500 mt-1">Define constraints and run what-if analysis.</p>
          <div className="mt-4">
            <button className="bg-brand-primary text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors">
              Run Optimization
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-700">AI Recommendations</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {aiRecommendations.slice(0, 3).map((rec, index) => (
              <li key={index} className="flex items-start">
                <span className="text-brand-accent mr-2 mt-1">▶</span>
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <div className="bg-white p-6 rounded-lg shadow h-96">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Demand Forecast vs. Actual (k Bbls)</h3>
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={forecastData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="actual" barSize={20} fill="#6B7280" name="Actual Demand" />
              <Line type="monotone" dataKey="forecast" stroke="#F59E0B" strokeWidth={2} name="Forecasted Demand" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default OptimizationDashboard;
