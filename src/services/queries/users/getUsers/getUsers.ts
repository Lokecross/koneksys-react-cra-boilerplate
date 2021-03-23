import { api } from '@services';

const getUsers = async () => {
  const { data: users } = await api.get('/users');

  return users;
};

export { getUsers };
