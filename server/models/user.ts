import type User from '../types/user';
import type { Document } from 'mongoose';
import { Schema } from 'mongoose';
import db from '../db/connection';
import bcrypt from 'bcrypt';

interface UserDocument extends User, Document {
  isValidPassword: (password: string) => Promise<boolean>;
}

const UserSchema = new Schema<UserDocument>({
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

// Check is valid password method
UserSchema.methods.isValidPassword = async function (password: string): Promise<boolean> {
  const user = this as UserDocument;
  return bcrypt.compare(password, user.password).catch(() => false);
};

export default db.model<UserDocument>('User', UserSchema);
