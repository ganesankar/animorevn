import type { RequestHandler } from 'express';
import httpErrors from 'http-errors';
import jwt from 'jsonwebtoken';

const verifyAccessToken: RequestHandler = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return next(new httpErrors.BadRequest('Require access token on header'));

  const token = authHeader.split(' ')[1];

  jwt.verify(token, process.env.JWT_ACCESS_KEY!, (error, payload) => {
    if (error) {
      if (error.message === 'jwt expired') {
        return next(new httpErrors.Unauthorized('Token expired'));
      }
      return next(new httpErrors.Unauthorized('Unvalid token'));
    }

    req.body.payload = payload;
    next();
  });
};

export default verifyAccessToken;
