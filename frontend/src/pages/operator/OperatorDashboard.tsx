import React from 'react';
import { operatorKpis } from '../../services/mock-data';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock chart data
const rvpChartData = [
  { name: '10:00', rvp: 8.5 },
  { name: '10:05', rvp: 8.6 },
  { name: '10:10', rvp: 8.55 },
  { name: '10:15', rvp: 8.7 },
  { name: '10:20', rvp: 8.8 },
  { name: '10:25', rvp: 8.75 },
  { name: '10:30', rvp: 8.7 },
];


const OperatorDashboard = () => {
  const kpis = operatorKpis;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Actual Swell Volume</h3>
          <p className="mt-1 text-3xl font-semibold text-brand-primary">{kpis.ACTUAL_SWELL_VOLUME.value.toLocaleString()} <span className="text-lg font-medium text-gray-500">{kpis.ACTUAL_SWELL_VOLUME.unit}</span></p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Blend Ratio</h3>
          <p className="mt-1 text-3xl font-semibold text-brand-primary">{kpis.BLEND_RATIO.value} <span className="text-lg font-medium text-gray-500">{kpis.BLEND_RATIO.unit}</span></p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">RVP Level</h3>
          <p className="mt-1 text-3xl font-semibold text-brand-primary">{kpis.RVP_LEVEL.value} <span className="text-lg font-medium text-gray-500">{kpis.RVP_LEVEL.unit}</span></p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Sulfur Content</h3>
          <p className="mt-1 text-3xl font-semibold text-brand-primary">{kpis.SULFUR_PPM.value} <span className="text-lg font-medium text-gray-500">{kpis.SULFUR_PPM.unit}</span></p>
        </div>
      </div>
      <div className="mt-8">
        <div className="bg-white p-6 rounded-lg shadow h-96">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Real-time RVP Monitoring</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={rvpChartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="rvp" stroke="#1E3A8A" strokeWidth={2} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default OperatorDashboard;
