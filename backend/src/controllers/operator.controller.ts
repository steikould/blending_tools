import { Request, Response, NextFunction } from 'express';

// @desc    Get real-time KPIs for the operator dashboard
// @route   GET /api/v1/operator/kpis
// @access  Private
export const getKpis = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Mock data
    const kpis = {
      ACTUAL_SWELL_VOLUME: { value: 1200, unit: 'Bbls', trend: 'up' },
      BLEND_RATIO: { value: 5.2, unit: '%', trend: 'stable' },
      RVP_LEVEL: { value: 8.8, unit: 'psi', trend: 'down' },
      SULFUR_PPM: { value: 10, unit: 'ppm', trend: 'stable' },
    };
    res.status(200).json({ success: true, data: kpis });
  } catch (error) {
    next(error);
  }
};

// @desc    Get step-by-step blend guidance
// @route   GET /api/v1/operator/blend-guidance
// @access  Private
export const getBlendGuidance = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const guidance = [
      { step: 1, instruction: "Open valve V-101 to start component A flow.", status: 'completed' },
      { step: 2, instruction: "Maintain flow rate at 500 bbl/hr.", status: 'in_progress' },
      { step: 3, instruction: "Monitor RVP levels in real-time.", status: 'pending' },
    ];
    res.status(200).json({ success: true, data: guidance });
  } catch (error) {
    next(error);
  }
};

// @desc    Get critical alerts
// @route   GET /api/v1/operator/alerts
// @access  Private
export const getAlerts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const alerts = [
            { id: 'ALERT-001', severity: 'CRITICAL', message: 'RVP exceeds limit in Tank T-10. Immediate action required.', timestamp: new Date() },
            { id: 'ALERT-002', severity: 'HIGH', message: 'Flow rate unstable in pipeline P-05.', timestamp: new Date() },
        ];
        res.status(200).json({ success: true, data: alerts });
    } catch (error) {
        next(error);
    }
};

// @desc    Get live batch tracking information
// @route   GET /api/v1/operator/batch-tracking
// @access  Private
export const getBatchTracking = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const batches = [
            { batch_id: 'B-123', product: 'Regular Unleaded', position: 'Segment 5', eta: '2025-08-29T10:00:00Z' },
            { batch_id: 'B-124', product: 'Premium Diesel', position: 'Segment 3', eta: '2025-08-29T12:30:00Z' },
        ];
        res.status(200).json({ success: true, data: batches });
    } catch (error) {
        next(error);
    }
};


// @desc    Get equipment status
// @route   GET /api/v1/operator/equipment-status
// @access  Private
export const getEquipmentStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const equipment = {
            tanks: [{ id: 'T-10', level: 85, status: 'ok' }, { id: 'T-12', level: 95, status: 'warning' }],
            pumps: [{ id: 'P-01', status: 'running' }, { id: 'P-02', status: 'stopped' }],
            valves: [{ id: 'V-101', status: 'open' }, { id: 'V-102', status: 'closed' }],
        };
        res.status(200).json({ success: true, data: equipment });
    } catch (error) {
        next(error);
    }
};
