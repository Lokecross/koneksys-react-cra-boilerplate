import { useQuery } from 'react-query';

import { getUser } from '@services/queries/users';

import { Shimmer } from '@components';

import { Container } from './User.styles';

const User = () => {
  const { isLoading, isError, data } = useQuery('users', () =>
    getUser('lokecross'),
  );

  if (isLoading) {
    return (
      <Container>
        <Shimmer style={{ height: 20, width: 200, borderRadius: 4 }} />
      </Container>
    );
  }

  if (isError) {
    return <Container>error</Container>;
  }

  return <Container>repositórios: {data.public_repos}</Container>;
};

export { User };
