import type { RequestHandler } from 'express';
import httpErrors from 'http-errors';
import bcrypt from 'bcrypt';
import prisma from '../db/prisma';
import redis from '../db/redis';
import { signAccessToken, signRefreshToken } from '../utils/jwt';
import { RegisterUser, LoginUser, TokenPayload } from '../types/auth';
import { loginValidation, registerValidation } from '../validations/auth';

export const registerController: RequestHandler = async (req, res, next) => {
  try {
    await registerValidation(req.body);

    const userRequest = req.body as RegisterUser;
    const user = await prisma.user.findFirst({ where: { username: userRequest.username } });
    if (user) throw new httpErrors.Conflict(`${userRequest.username} is exist`);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userRequest.password, salt);

    const { password, ...newUser } = await prisma.user.create({
      data: {
        username: userRequest.username,
        password: hashedPassword,
        avatarURL: userRequest.avatarURL ?? null,
      },
    });
    const accessToken = await signAccessToken(newUser);
    const refreshToken = await signRefreshToken(newUser);

    res.status(200).json({ ...newUser, accessToken, refreshToken });
  } catch (error) {
    next(error);
  }
};

export const loginController: RequestHandler = async (req, res, next) => {
  try {
    await loginValidation(req.body);

    const { username, password } = req.body as LoginUser;
    const user = await prisma.user.findFirst({ where: { username } });
    if (!user) throw new httpErrors.NotFound('The username does not exist');

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) throw new httpErrors.Unauthorized('Wrong password');

    const { password: userPassword, ...otherInfo } = user;
    const accessToken = await signAccessToken(user);
    const refreshToken = await signRefreshToken(user);

    res.status(200).json({ ...otherInfo, accessToken, refreshToken });
  } catch (error) {
    next(error);
  }
};

export const logoutController: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.body.payload as TokenPayload;

    redis.del(id, (error) => {
      if (error) throw new httpErrors.InternalServerError(error.message);
      res.status(200).json({ message: 'Logout success' });
    });
  } catch (error) {
    next(error);
  }
};

export const refreshTokenController: RequestHandler = async (req, res, next) => {
  try {
    const payload = req.body.payload as TokenPayload;
    const accessToken = await signAccessToken(payload);
    const refreshToken = await signRefreshToken(payload);

    res.status(200).json({ accessToken, refreshToken });
  } catch (error) {
    next(error);
  }
};
