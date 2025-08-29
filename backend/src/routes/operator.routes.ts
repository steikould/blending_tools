import { Router } from 'express';
import { getKpis, getBlendGuidance, getAlerts, getBatchTracking, getEquipmentStatus } from '../controllers/operator.controller';
// import { protect } from '../middleware/auth.middleware';

const router = Router();

// All operator routes should be protected
// router.use(protect);

router.get('/kpis', getKpis);
router.get('/blend-guidance', getBlendGuidance);
router.get('/alerts', getAlerts);
router.get('/batch-tracking', getBatchTracking);
router.get('/equipment-status', getEquipmentStatus);

export default router;
