import type { SignOptions } from 'jsonwebtoken';
import type { TokenPayload } from '../types/auth';
import jwt from 'jsonwebtoken';
import httpErrors from 'http-errors';
import redis from '../db/redis';

export const signAccessToken = ({ id, role }: TokenPayload): Promise<string> => {
  return new Promise((resolve, reject) => {
    const payload = { id, role };

    const options: SignOptions = {
      expiresIn: '2h',
    };

    jwt.sign(payload, process.env.JWT_ACCESS_KEY!, options, (error, token) => {
      if (error) return reject(error);
      if (!token) return reject('Unvaild token');
      resolve(token);
    });
  });
};

export const signRefreshToken = ({ id, role }: TokenPayload): Promise<string> => {
  return new Promise((resolve, reject) => {
    const payload = { id, role };

    const options: SignOptions = {
      expiresIn: '1y',
    };

    const tokenExpires = 365 * 24 * 60 * 60; // 1 year

    jwt.sign(payload, process.env.JWT_REFRESH_KEY!, options, (error, token) => {
      if (error) return reject(error);
      if (!token) return reject('Unvaild token');

      redis.set(id, token, 'EX', tokenExpires, (error) => {
        if (error) return reject(new httpErrors.InternalServerError());
        resolve(token);
      });
    });
  });
};
