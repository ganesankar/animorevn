import joi from 'joi';
import { RegisterUser, LoginUser } from '../types/auth';

export const registerValidation = async (data: unknown) => {
  const registerSchema = joi.object<RegisterUser>({
    username: joi.string().min(3).max(10).required(),
    password: joi.string().min(3).required(),
    avatarURL: joi.string().uri().optional(),
  });

  return await registerSchema.validateAsync(data);
};

export const loginValidation = async (data: unknown) => {
  const loginSchema = joi.object<LoginUser>({
    username: joi.string().min(3).max(10).required(),
    password: joi.string().min(3).required(),
  });

  return await loginSchema.validateAsync(data);
};
