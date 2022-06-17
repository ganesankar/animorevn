import { Router } from 'express';
import {
  registerController,
  loginController,
  logoutController,
  refreshTokenController,
} from '../controllers/auth';
import verifyRefreshToken from '../middlewares/verifyRefreshToken';

const authRoute = Router();

authRoute.post('/register', registerController);
authRoute.post('/login', loginController);
authRoute.post('/logout', verifyRefreshToken, logoutController);
authRoute.post('/refresh-token', verifyRefreshToken, refreshTokenController);

export default authRoute;
