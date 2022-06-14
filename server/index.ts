import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connection';

import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors({ origin: ['*'], methods: ['GET', 'POST', 'PUT', 'DELETE'] }));
app.use(helmet());
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));
app.use(cookieParser());
app.use(morgan('common'));

const connection = connectDB(process.env.DB_URL!);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  // Handler when shutdown server
  process.on('SIGINT', async () => {
    await connection.close(); // Disconnect DB
    console.log('Server shutdown');
    process.exit();
  });
});
