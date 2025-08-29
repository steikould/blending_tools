import { Router } from 'express';
import operatorRoutes from './operator.routes';
import managerRoutes from './manager.routes';
import optimizationRoutes from './optimization.routes';
// import authRoutes from './auth.routes';

const router = Router();

// router.use('/auth', authRoutes);
router.use('/operator', operatorRoutes);
router.use('/manager', managerRoutes);
router.use('/optimization', optimizationRoutes);

export default router;
