import type { Response, CookieOptions } from 'express';

const setCookie = (res: Response, name: string, value: string, option?: CookieOptions) => {
  res.cookie(name, value, {
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'PRODUCTION', // Set secure = true on PRODUCTION
    ...option,
  });
};

export default setCookie;
