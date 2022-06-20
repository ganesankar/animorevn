import type { SignOptions } from 'jsonwebtoken';
import type { TokenPayload } from '../types/auth';
import jwt from 'jsonwebtoken';
import httpErrors from 'http-errors';
import redis from '../db/redis';
import config from './config';

export const signAccessToken = ({ id, role }: TokenPayload): Promise<string> => {
  return new Promise((resolve, reject) => {
    const payload = { id, role }; // Just get id and role property on pram object

    const options: SignOptions = {
      expiresIn: '2h',
    };

    jwt.sign(payload, config.jwt.accessKey, options, (error, token) => {
      if (error) return reject(error);
      if (!token) return reject('Unvaild token');
      resolve(token);
    });
  });
};

export const signRefreshToken = ({ id, role }: TokenPayload): Promise<string> => {
  return new Promise((resolve, reject) => {
    const payload = { id, role }; //  Just get id and role property on pram object

    const tokenExpires = 365 * 24 * 60 * 60; // 1 year
    const options: SignOptions = {
      expiresIn: tokenExpires,
    };

    jwt.sign(payload, config.jwt.refreshKey, options, (error, token) => {
      if (error) return reject(error);
      if (!token) return reject('Unvaild token');

      redis.set(payload.id, token, 'EX', tokenExpires, (error) => {
        if (error) return reject(new httpErrors.InternalServerError());
        resolve(token);
      });
    });
  });
};
