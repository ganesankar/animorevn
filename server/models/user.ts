import type { User } from '../types';
import { Schema } from 'mongoose';
import db from '../db/connection';
import bcrypt from 'bcrypt';

const UserSchema = new Schema<User>({
  username: {
    type: String,
    unique: true,
    minlength: 3,
    maxlength: 10,
    required: true,
  },
  password: {
    type: String,
    minlength: 3,
    required: true,
  },
  avatarURL: {
    type: String,
  },
  role: {
    type: String,
    default: 'user',
  },
});

// Hash password before save
UserSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

export default db.model<User>('User', UserSchema);
