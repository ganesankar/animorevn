import mongoose from 'mongoose';

export interface User {
  username: string;
  password: string;
  avatarURL?: string | null;
  role: 'user' | 'admin';
}

const userSchema = new mongoose.Schema<User>({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatarURL: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'user',
  },
});

export default mongoose.model<User>('user', userSchema);
