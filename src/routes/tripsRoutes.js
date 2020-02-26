import express from 'express';
import tripsController from '../controllers/tripsController';
import { requestRules, returnTripRules, multiCityTripRules } from '../validation/validationRules';
import validationResult from '../validation/validationResult';
import protectRoute from '../middlewares/protectRoute';
import rememberProfile from '../utils/rememberProfile';

const router = express.Router();

router.post('/one-way', protectRoute.verifyUser, protectRoute.verifyRequester, rememberProfile, requestRules, validationResult, tripsController.createRequest);
router.post('/return', protectRoute.verifyUser, protectRoute.verifyRequester, rememberProfile, returnTripRules, validationResult, tripsController.createReturnRequest);
router.post('/multi-city', protectRoute.verifyUser, protectRoute.verifyRequester, multiCityTripRules, validationResult, tripsController.createMultiCityRequest);
router.patch('/edit', protectRoute.verifyUser, protectRoute.verifyRequester, rememberProfile, requestRules, validationResult, tripsController.editRequest);

export default router;