import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const db = mongoose.createConnection(process.env.DB_URL!);

db.on('connected', () => {
  console.log('Mongoose - Connected DB');
});

db.on('disconnected', () => {
  console.log('Mongoose - Disconnected');
});

db.on('error', (error) => {
  console.log('Mongoose - Error:', JSON.stringify(error));
});

export default db;
