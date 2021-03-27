import { api } from '@services';

const getUser = async (username: string) => {
  const { data: user } = await api.get(`/users/${username}`);

  await new Promise(resolve => setTimeout(resolve, 2000));

  return user;
};

export { getUser };
