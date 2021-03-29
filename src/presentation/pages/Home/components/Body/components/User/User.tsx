import { useQuery } from 'react-query';

import { format } from 'date-fns';

import { useParams } from 'react-router-dom';

import { getUser } from '@services/queries/users';

import { useToast } from '@hooks';

import { UserLoading } from './loading/User.loading';
import { UserError } from './error/User.error';

import { Container, Text } from './User.styles';

const User = () => {
  const params = useParams<{ id: string }>();

  const { toast } = useToast();

  const { isLoading, isError, data } = useQuery(
    'users',
    () => {
      return getUser(params.id);
    },
    {
      onError: () => {
        toast.error('Failed to found user');
      },
    },
  );

  if (isLoading) {
    return <UserLoading />;
  }

  if (isError || !data) {
    return <UserError />;
  }

  return (
    <Container>
      <Text>repos: {data.reposAmount}</Text>
      <Text>criado em: {format(data.createdAt, "dd/MM/yyyy 'às' HH:mm")}</Text>
    </Container>
  );
};

export { User };
