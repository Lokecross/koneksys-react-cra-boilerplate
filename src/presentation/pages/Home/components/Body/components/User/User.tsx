import { useQuery } from 'react-query';

import { format } from 'date-fns';

import { getUser } from '@services/queries/users';

import { Shimmer } from '@components';

import { Container, Text } from './User.styles';

const User = () => {
  const { isLoading, isError, data } = useQuery('users', () =>
    getUser('lokecross'),
  );

  if (isLoading) {
    return (
      <Container>
        <Shimmer style={{ height: 20, width: 140, borderRadius: 4 }} />
        <Shimmer
          style={{ marginTop: 5, height: 20, width: 200, borderRadius: 4 }}
        />
      </Container>
    );
  }

  if (isError || !data) {
    return <Container>error</Container>;
  }

  return (
    <Container>
      <Text>repos: {data.reposAmount}</Text>
      <Text>criado em: {format(data.createdAt, "dd/MM/yyyy 'às' HH:mm")}</Text>
    </Container>
  );
};

export { User };
