import express from 'express';
import 'dotenv/config';

import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import errorHandler from './middlewares/errorHandler';
import error404Handler from './middlewares/error404Handler';

import rootRoute from './routes';

import prisma from './db/prisma';
import redis from './db/redis';

const app = express();
const PORT = process.env.PORT || 8000;

// Middlewares
app.use(cors({ origin: ['*'], methods: ['GET', 'POST', 'PUT', 'DELETE'] }));
app.use(helmet());
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));
app.use(cookieParser());
app.use(morgan('common'));

// Routers
app.use('/', rootRoute);

// Error handler
app.use(error404Handler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  // Handle when shutdown server
  process.on('SIGINT', async () => {
    await prisma.$disconnect();
    redis.disconnect();

    console.log('Server shutdown');
    process.exit();
  });
});
