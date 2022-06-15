import joi from 'joi';
import { RegisterUser } from '../types';

export const registerValidation = (data: unknown) => {
  const userSchema = joi.object<RegisterUser>({
    username: joi.string().min(3).max(10).required(),
    password: joi.string().min(3).required(),
    avatarURL: joi.string().domain().optional(),
  });

  return userSchema.validate(data);
};
