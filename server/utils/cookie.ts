import type { Response, CookieOptions } from 'express';

const setCookie = (res: Response, name: string, val: string, option?: CookieOptions) => {
  res.cookie(name, val, {
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.MODE !== 'dev', // Set secure = true on production
    ...option,
  });
};

export default setCookie;
