import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import OperatorDashboard from './pages/operator/OperatorDashboard';
import ManagerDashboard from './pages/manager/ManagerDashboard';
import OptimizationDashboard from './pages/optimization/OptimizationDashboard';

const AppContent = () => {
  const location = useLocation();

  const getHeaderTitle = () => {
    switch (location.pathname) {
      case '/operator':
        return 'Operator Dashboard';
      case '/manager':
        return 'Operations Manager Dashboard';
      case '/optimization':
        return 'Optimization Manager Dashboard';
      default:
        return 'Fuel Blending Analytics';
    }
  };

  return (
    <MainLayout headerTitle={getHeaderTitle()}>
      <Routes>
        <Route path="/" element={<Navigate to="/operator" replace />} />
        <Route path="operator" element={<OperatorDashboard />} />
        <Route path="manager" element={<ManagerDashboard />} />
        <Route path="optimization" element={<OptimizationDashboard />} />
      </Routes>
    </MainLayout>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AppContent />} />
      </Routes>
    </Router>
  );
}

export default App;
