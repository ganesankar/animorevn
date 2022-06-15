import { Router } from 'express';
import {
  registerController,
  loginController,
  logoutController,
  refreshTokenController,
} from '../controllers/auth';

const authRoute = Router();

authRoute.post('/register', registerController);
authRoute.post('/login', loginController);
authRoute.post('/logout', logoutController);
authRoute.post('/refresh-token', refreshTokenController);

export default authRoute;
