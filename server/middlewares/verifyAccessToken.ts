import type { RequestHandler } from 'express';
import httpErrors from 'http-errors';
import jwt from 'jsonwebtoken';
import config from '../utils/config';

const verifyAccessToken: RequestHandler = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return next(new httpErrors.Unauthorized());

  const token = authHeader.split(' ')[1];

  jwt.verify(token, config.jwt.accessKey, (error, payload) => {
    if (error) {
      if (error.message === 'jwt expired') {
        return next(new httpErrors.Unauthorized('Token expired'));
      }
      return next(new httpErrors.Unauthorized('Unvalid access token'));
    }

    req.body.payload = payload;
    next();
  });
};

export default verifyAccessToken;
