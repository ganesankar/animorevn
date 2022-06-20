import Redis from 'ioredis';
import config from '../utils/config';

const redis = new Redis({
  host: config.redis.host,
  port: config.redis.port,
  username: config.redis.username,
  password: config.redis.password,
});

redis.on('ready', () => {
  console.log('Redis:: Ready');
});

redis.on('error', (error) => {
  console.log('Redis:: Error::', error);
});

export default redis;
