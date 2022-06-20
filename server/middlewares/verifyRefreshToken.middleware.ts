import type { RequestHandler } from 'express';
import type { TokenPayload } from '../types/auth';
import jwt from 'jsonwebtoken';
import httpErrors from 'http-errors';
import redis from '../db/redis';
import config from '../utils/config';

const verifyRefreshToken: RequestHandler = (req, res, next) => {
  const token = req.cookies.refreshToken as string | undefined;
  if (!token) return next(new httpErrors.Unauthorized());

  jwt.verify(token, config.jwt.refreshKey, (error, payload) => {
    if (error) {
      if (error.message === 'jwt expired') {
        return next(new httpErrors.Unauthorized('Token expired'));
      }
      return next(new httpErrors.Unauthorized('Unvalid token'));
    }

    const tokenPayload = payload as TokenPayload;
    redis.get(tokenPayload.id, (error, result) => {
      if (error) return next(new httpErrors.InternalServerError(error.message));
      if (token == result) {
        req.body.payload = tokenPayload;
        return next();
      }
      return next(new httpErrors.Unauthorized('Unvalid token'));
    });
  });
};

export default verifyRefreshToken;
