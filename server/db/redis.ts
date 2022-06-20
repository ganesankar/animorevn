import Redis from 'ioredis';
import config from '../utils/config';

const redis = new Redis({ ...config.redis });

redis.on('ready', () => {
  console.log('Redis:: Ready');
});

redis.on('error', (error) => {
  console.log('Redis:: Error::', error);
});

export default redis;
