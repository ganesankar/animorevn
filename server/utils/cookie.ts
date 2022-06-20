import type { Response, CookieOptions } from 'express';
import config from './config';

const setCookie = (res: Response, name: string, value: string, option?: CookieOptions) => {
  res.cookie(name, value, {
    httpOnly: true,
    sameSite: 'strict',
    secure: config.env === 'PRODUCTION', // Set secure = true on PRODUCTION
    ...option,
  });
};

export default setCookie;
