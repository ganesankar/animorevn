import type { RegisterUser } from '../types/user';
import user from '../models/user';

export const createUser = async (userInfo: RegisterUser) => {
  return await user.create({
    ...userInfo,
    avatarURL: userInfo.avatarURL ?? null,
  });
};

export const isUserExist = async (username: string) => {
  const isExist = await user.findOne({ username });
  return !!isExist;
};

export const getUserByUsername = async (username: string) => {
  return await user.findOne({ username });
};
