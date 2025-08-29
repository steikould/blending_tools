import React from 'react';
import { managerPerformanceMetrics, qualityIncidents } from '../../services/mock-data';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ebitdaChartData = [
  { name: 'Jan', actual: 1.1, target: 1.0 },
  { name: 'Feb', actual: 1.3, target: 1.1 },
  { name: 'Mar', actual: 1.5, target: 1.2 },
  { name: 'Apr', actual: 1.4, target: 1.3 },
  { name: 'May', actual: 1.6, target: 1.4 },
  { name: 'Jun', actual: 1.8, target: 1.5 },
  { name: 'Jul', actual: 1.7, target: 1.6 },
  { name: 'Aug', actual: 1.9, target: 1.7 },
];

const ManagerDashboard = () => {
  const metrics = managerPerformanceMetrics;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Monthly EBITDA</h3>
          <p className="mt-1 text-3xl font-semibold text-brand-primary">{metrics.monthly_ebitda.value}{metrics.monthly_ebitda.unit}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Compliance Rate</h3>
          <p className="mt-1 text-3xl font-semibold text-brand-primary">{metrics.compliance_rate.value}{metrics.compliance_rate.unit}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Quality Incidents (Month)</h3>
          <p className="mt-1 text-3xl font-semibold text-brand-danger">{qualityIncidents.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Tank Farm Utilization</h3>
          <p className="mt-1 text-3xl font-semibold text-brand-primary">{metrics.operator_efficiency.value}%</p>
        </div>
      </div>
       <div className="mt-8">
        <div className="bg-white p-6 rounded-lg shadow h-96">
          <h3 className="text-lg font-medium text-gray-700 mb-4">EBITDA Performance vs. Target ($M)</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ebitdaChartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="actual" fill="#1E3A8A" name="Actual EBITDA" />
              <Bar dataKey="target" fill="#9CA3AF" name="Target EBITDA" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;
