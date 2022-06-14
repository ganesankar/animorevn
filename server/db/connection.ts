import mongoose from 'mongoose';

const connectDB = (url: string) => {
  const connection = mongoose.createConnection(url);

  connection.on('connected', () => {
    console.log('Mongoose - Connected DB');
  });

  connection.on('disconnected', () => {
    console.log('Mongoose - Disconnected');
  });

  connection.on('error', (error) => {
    console.log('Mongoose - Error:', JSON.stringify(error));
  });

  return connection;
};

export default connectDB;
