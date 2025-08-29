import { Request, Response, NextFunction } from 'express';

// @desc    Get performance metrics for the manager dashboard
// @route   GET /api/v1/manager/performance
// @access  Private
export const getPerformanceMetrics = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const metrics = {
      monthly_ebitda: { value: 1.2, unit: 'M$', trend: 'up' },
      quarterly_ebitda: { value: 3.5, unit: 'M$', trend: 'up' },
      compliance_rate: { value: 99.8, unit: '%', trend: 'stable' },
      operator_efficiency: { value: 92, unit: '%', trend: 'down' },
    };
    res.status(200).json({ success: true, data: metrics });
  } catch (error) {
    next(error);
  }
};

// @desc    Get quality incident reports
// @route   GET /api/v1/manager/quality-incidents
// @access  Private
export const getQualityReports = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const incidents = [
      { incident_id: 'QI-051', date: '2025-08-28', type: 'RVP Excursion', severity: 'High', status: 'Closed' },
      { incident_id: 'QI-052', date: '2025-08-29', type: 'Sulfur Content', severity: 'Medium', status: 'Open' },
    ];
    res.status(200).json({ success: true, data: incidents });
  } catch (error) {
    next(error);
  }
};

// @desc    Get resource utilization data
// @route   GET /api/v1/manager/utilization
// @access  Private
export const getResourceUtilization = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const utilization = {
            tank_farm_usage: { value: 88, unit: '%', optimal: true },
            pipeline_throughput: { value: 95, unit: '% of capacity', optimal: true },
        };
        res.status(200).json({ success: true, data: utilization });
    } catch (error) {
        next(error);
    }
};

// @desc    Get compliance reporting metrics
// @route   GET /api/v1/manager/compliance
// @access  Private
export const getComplianceReports = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const reports = [
            { report_id: 'REG-001', name: 'EPA Tier 3 Sulfur Compliance', status: 'Compliant', last_updated: new Date() },
            { report_id: 'REG-002', name: 'Summer RVP Attainment Report', status: 'Compliant', last_updated: new Date() },
        ];
        res.status(200).json({ success: true, data: reports });
    } catch (error) {
        next(error);
    }
};

// @desc    Get component cost analysis
// @route   GET /api/v1/manager/costs
// @access  Private
export const getCostAnalysis = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const costs = {
            butane_cost_variance: { value: -5, unit: '% vs budget', status: 'favorable' },
            ethanol_cost_variance: { value: 2, unit: '% vs budget', status: 'unfavorable' },
        };
        res.status(200).json({ success: true, data: costs });
    } catch (error) {
        next(error);
    }
};
