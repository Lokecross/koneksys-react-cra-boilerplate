import { api } from '@services';

import User, { IUserApiModel, IUser } from '@models/User.model';

const getUser = async (username: string): Promise<IUser> => {
  const { data: user } = await api.get<IUserApiModel>(`/users/${username}`);

  // delay to test shimmer effect
  await new Promise(resolve => setTimeout(resolve, 2000));

  return User.fromApiModel(user);
};

export { getUser };
