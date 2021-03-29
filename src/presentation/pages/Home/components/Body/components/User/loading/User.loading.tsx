import { Shimmer } from '@components';

import { Container } from '../User.styles';

const UserLoading = () => {
  return (
    <Container>
      <Shimmer style={{ height: 20, width: 140, borderRadius: 4 }} />
      <Shimmer
        style={{ marginTop: 5, height: 20, width: 200, borderRadius: 4 }}
      />
    </Container>
  );
};

export { UserLoading };
