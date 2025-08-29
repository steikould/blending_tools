import { Router } from 'express';
import { runScenarioAnalysis, getConstraintInfo, getEconomicOptimization, getDemandForecast, getSupplyChainRecs } from '../controllers/optimization.controller';
// import { protect, authorize } from '../middleware/auth.middleware';

const router = Router();

// These routes should be protected and restricted to optimization managers
// router.use(protect, authorize('optimization_manager', 'admin'));

router.post('/scenario-modeling', runScenarioAnalysis);
router.get('/constraints', getConstraintInfo);
router.get('/economic-optimization', getEconomicOptimization);
router.get('/demand-forecast', getDemandForecast);
router.get('/supply-chain', getSupplyChainRecs);

export default router;
