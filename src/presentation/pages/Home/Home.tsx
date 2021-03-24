import { useQuery } from 'react-query';

import { useState } from '@hookstate/core';

import { useAppDispatch, useAppSelector } from '@store/redux/store';
import { increment } from '@store/redux/features/counter';

import { getUser } from '@services/queries/users';

import { useTheme } from '@hooks';

import { Button } from '@components';

import { Container, Label } from './Home.styles';

const Home = () => {
  const { counter } = useAppSelector();
  const dispatch = useAppDispatch();

  const { toggleTheme, theme } = useTheme();

  const state = useState(0);

  const { isLoading, isError } = useQuery('users', () => getUser('lokecross'));

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <div>error</div>;
  }

  return (
    <Container>
      <Label>redux: {counter.value}</Label>
      <Button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment redux
      </Button>

      <Label style={{ marginTop: 10 }}>state: {state.get()} </Label>
      <Button onClick={() => state.set(p => p + 1)}>Increment</Button>

      <Label style={{ marginTop: 10 }}>{`theme: ${theme.title}`}</Label>

      <Button onClick={toggleTheme}>toggle theme</Button>
    </Container>
  );
};

export { Home };
