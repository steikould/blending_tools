import { Router } from 'express';
import { getPerformanceMetrics, getQualityReports, getResourceUtilization, getComplianceReports, getCostAnalysis } from '../controllers/manager.controller';
// import { protect, authorize } from '../middleware/auth.middleware';

const router = Router();

// These routes should be protected and restricted to managers
// router.use(protect, authorize('manager', 'admin'));

router.get('/performance', getPerformanceMetrics);
router.get('/quality-incidents', getQualityReports);
router.get('/utilization', getResourceUtilization);
router.get('/compliance', getComplianceReports);
router.get('/costs', getCostAnalysis);

export default router;
