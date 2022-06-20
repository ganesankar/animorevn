import 'dotenv/config';

const config = {
  redis: {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD,
  },
  jwt: {
    accessKey: process.env.JWT_ACCESS_KEY!,
    refreshKey: process.env.JWT_REFRESH_KEY!,
  },
  port: process.env.PORT || 8000,
  env: process.env.NODE_ENV,
};

export default config;
