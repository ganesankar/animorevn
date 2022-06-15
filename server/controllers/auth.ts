import type { RequestHandler } from 'express';
import httpErrors from 'http-errors';
import { signAccessToken, signRefreshToken } from '../utils/jwt';
import { createUser, getUserByUsername, isUserExist } from '../db/service';
import { RegisterUser, LoginUser } from '../types/user';
import { loginValidattion, registerValidation } from '../validations/auth';

export const registerController: RequestHandler = async (req, res, next) => {
  try {
    await registerValidation(req.body);

    const { username, password, avatarURL } = req.body as RegisterUser;

    const isExist = await isUserExist(username);
    if (isExist) throw new httpErrors.Conflict(`${username} is exist`);

    const newUser = await createUser({ username, password, avatarURL });
    const accessToken = await signAccessToken(newUser.id, newUser.role);
    const refreshToken = await signRefreshToken(newUser.id, newUser.role);

    res.status(200).json({ user: newUser, accessToken, refreshToken });
  } catch (error) {
    next(error);
  }
};

export const loginController: RequestHandler = async (req, res, next) => {
  try {
    await loginValidattion(req.body);

    const { username, password } = req.body as LoginUser;
    const user = await getUserByUsername(username);
    if (!user) throw new httpErrors.NotFound('The username does not exist');

    const isValidPassword = await user.isValidPassword(password);
    if (!isValidPassword) throw new httpErrors.Unauthorized('Wrong password');

    const accessToken = await signAccessToken(user.id, user.role);
    const refreshToken = await signRefreshToken(user.id, user.role);

    res.status(200).json({ user, accessToken, refreshToken });
  } catch (error) {
    next(error);
  }
};

export const logoutController: RequestHandler = (req, res) => {
  res.json({ message: 'Hello' });
};

export const refreshTokenController: RequestHandler = (req, res) => {
  res.json({ message: 'Hello' });
};
