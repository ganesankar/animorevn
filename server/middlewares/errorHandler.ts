import type { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  const status = error.status ?? 500;
  res.status(status).json({ status: status, error: error.message });
};

export default errorHandler;
