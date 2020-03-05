import express from 'express';
import validationResult from '../validation/validationResult';
import notificationController from '../controllers/notificationController';
import protectRoute from '../middlewares/protectRoute';

const router = express.Router();

router.get('/', protectRoute.verifyUser, validationResult, notificationController.getAllNotifications); // include validations too
router.patch('/all-read', protectRoute.verifyUser, protectRoute.checkUnreadNotifications, validationResult, notificationController.markAllNotificationsAsRead);

export default router;
