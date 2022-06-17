import { Router } from 'express';
import {
  registerController,
  loginController,
  logoutController,
  refreshTokenController,
} from '../controllers/auth.controller';
import { verifyAccessToken, verifyRefreshToken } from '../middlewares';

const authRoute = Router();

authRoute.post('/register', registerController);
authRoute.post('/login', loginController);
authRoute.post('/logout', verifyAccessToken, verifyRefreshToken, logoutController);
authRoute.post('/refresh', verifyAccessToken, verifyRefreshToken, refreshTokenController);

export default authRoute;
