import express from 'express';

import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

import { error404Handler, errorHandler } from './middlewares';
import rootRoute from './routes';
import config from './utils/config';

const app = express();
const PORT = config.port;

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

// Routers
app.use('/', rootRoute);

// Error handler
app.use(error404Handler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  // Handle when shutdown server
  process.on('SIGINT', () => {
    console.log('Server shutdown');
    process.exit();
  });
});
