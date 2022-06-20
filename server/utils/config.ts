import type { Config, Environment } from '../types/config';
import { get } from 'env-var';
import 'dotenv/config';

const config: Config = Object.freeze({
  redis: {
    host: get('REDIS_HOST').required().asString(),
    port: get('REDIS_PORT').required().asPortNumber(),
    username: get('REDIS_USERNAME').required().asString(),
    password: get('REDIS_PASSWORD').required().asString(),
  },
  jwt: {
    accessKey: get('JWT_ACCESS_KEY').required().asString(),
    refreshKey: get('JWT_REFRESH_KEY').required().asString(),
  },
  port: get('PORT').asPortNumber() || 8000,
  env: get('ENV').example('PRODUCTION').asString() as Environment,
});

export default config;
