import mongoose from 'mongoose';

const connect = mongoose.createConnection(process.env.DB_URL!);

connect.on('connected', () => {
  console.log('Mongoose:: Connected DB');
});

connect.on('disconnected', () => {
  console.log('Mongoose:: Disconnected');
});

connect.on('error', (error) => {
  console.log('Mongoose:: Error::', JSON.stringify(error));
});

// Disconnect DB when close server
process.on('SIGINT', async () => {
  await connect.close();
  process.exit();
});
