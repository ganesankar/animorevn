import type { RequestHandler } from 'express';
import httpErrors from 'http-errors';
import { createUser, isUserExist } from '../db/service';
import { RegisterUser } from '../types';
import { registerValidation } from '../validations/auth';

export const registerController: RequestHandler = async (req, res, next) => {
  try {
    const { error } = registerValidation(req.body);
    if (error) throw httpErrors(error);

    const { username, password, avatarURL } = req.body as RegisterUser;

    const isExist = await isUserExist(username);
    if (isExist) throw new httpErrors.Conflict(`${username} is exist`);

    const newUser = await createUser({ username, password, avatarURL });

    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
};

export const loginController: RequestHandler = (req, res) => {
  res.json({ message: 'Hello' });
};

export const logoutController: RequestHandler = (req, res) => {
  res.json({ message: 'Hello' });
};

export const refreshTokenController: RequestHandler = (req, res) => {
  res.json({ message: 'Hello' });
};
