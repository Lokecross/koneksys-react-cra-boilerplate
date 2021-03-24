import { api } from '@services';

const getUser = async (username: string) => {
  const { data: user } = await api.get(`/users/${username}`);

  return user;
};

export { getUser };
