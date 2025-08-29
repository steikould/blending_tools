// --- Operator Dashboard Mock Data ---
export const operatorKpis = {
  ACTUAL_SWELL_VOLUME: { value: 1250, unit: 'Bbls', trend: 'up' },
  BLEND_RATIO: { value: 5.3, unit: '%', trend: 'stable' },
  RVP_LEVEL: { value: 8.7, unit: 'psi', trend: 'down' },
  SULFUR_PPM: { value: 11, unit: 'ppm', trend: 'stable' },
};

// --- Manager Dashboard Mock Data ---
export const managerPerformanceMetrics = {
  monthly_ebitda: { value: 1.2, unit: 'M$', trend: 'up' },
  quarterly_ebitda: { value: 3.5, unit: 'M$', trend: 'up' },
  compliance_rate: { value: 99.8, unit: '%', trend: 'stable' },
  operator_efficiency: { value: 92, unit: '%', trend: 'down' },
};

export const qualityIncidents = [
  { incident_id: 'QI-051', date: '2025-08-28', type: 'RVP Excursion', severity: 'High', status: 'Closed' },
  { incident_id: 'QI-052', date: '2025-08-29', type: 'Sulfur Content', severity: 'Medium', status: 'Open' },
];


// --- Optimization Dashboard Mock Data ---
export const aiRecommendations = [
    'Increase butane purchase by 10% for optimal RVP.',
    'Adjust blend recipe for premium grade to maximize EBITDA.',
    'Source from Supplier X for a 3% cost reduction on ethanol.',
    'Schedule JIT delivery for ethanol to reduce inventory holding costs.'
];
