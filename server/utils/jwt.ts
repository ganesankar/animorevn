import type { SignOptions } from 'jsonwebtoken';
import jwt from 'jsonwebtoken';

export const signAccessToken = (payload: { id: string; role: string }) => {
  return new Promise((resolve, reject) => {
    const options: SignOptions = {
      expiresIn: '2h',
    };
    jwt.sign(payload, process.env.JWT_ACCESS_KEY!, options, (error, token) => {
      if (error) reject(error);
      resolve(token);
    });
  });
};

export const signRefreshToken = (payload: { id: string; role: string }) => {
  return new Promise((resolve, reject) => {
    const options: SignOptions = {
      expiresIn: '1y',
    };
    jwt.sign(payload, process.env.JWT_REFRESH_KEY!, options, (error, token) => {
      if (error) reject(error);
      resolve(token);
    });
  });
};
