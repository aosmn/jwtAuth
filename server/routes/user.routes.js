import express from 'express';
import {
  authUser,
  registerUser,
  updateUser,
  sendPasswordReset,
  passwordReset
} from '../controllers/user.controller.js';
import { protect } from '../middleware/auth.middleware.js';
const router = express.Router();

router.route('/').post(registerUser).put(protect, updateUser);
router.post('/login', authUser);
router.post('/recover', sendPasswordReset);
router.post('/reset', passwordReset);

export default router;
