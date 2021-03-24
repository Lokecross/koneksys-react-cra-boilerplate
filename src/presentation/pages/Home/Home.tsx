import { useQuery } from 'react-query';

import { useState } from '@hookstate/core';

import { useAppDispatch, useAppSelector } from '@store/redux/store';
import { increment } from '@store/redux/features/counter';

import { getUser } from '@services/queries/users';

import { useTheme } from '@hooks';

import { Container } from './Home.styles';

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
      <div>redux: {counter.value}</div>
      <button
        type="button"
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment redux
      </button>

      <div>state: {state.get()} </div>
      <button type="button" onClick={() => state.set(p => p + 1)}>
        Increment
      </button>

      <div>{`theme: ${theme.title}`}</div>

      <button type="button" onClick={toggleTheme}>
        toggle theme
      </button>
    </Container>
  );
};

export { Home };
