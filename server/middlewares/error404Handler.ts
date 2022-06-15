import type { RequestHandler } from 'express';
import { NotFound } from 'http-errors';

const error404Handler: RequestHandler = (req, res, next) => {
  next(new NotFound('This route does not exist'));
};

export default error404Handler;
