import Redis from 'ioredis';

const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
  username: process.env.REDIS_USERNAME,
  password: process.env.REDIS_PASSWORD,
});

redis.on('ready', () => {
  console.log('Redis:: Ready');
});

redis.on('error', (error) => {
  console.log('Redis:: Error::', error);
});

export default redis;
