import joi from 'joi';
import { UserLogin } from '~/types/auth';
import { joiResolver } from '@hookform/resolvers/joi';

export const loginSchema = joi.object<UserLogin>({
  username: joi.string().min(3).max(10).required(),
  password: joi.string().min(3).required(),
});

export const loginSchemaResolver = joiResolver(loginSchema);
