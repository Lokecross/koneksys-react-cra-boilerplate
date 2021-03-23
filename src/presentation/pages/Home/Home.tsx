import { useQuery } from 'react-query';

import { useState } from '@hookstate/core';

import { useAppDispatch, useAppSelector } from '@store/redux/store';
import { increment } from '@store/redux/features/counter';

import { getUsers } from '@services/queries/users';

import { Container } from './Home.styles';

const Home = () => {
  const { counter } = useAppSelector();
  const dispatch = useAppDispatch();

  const state = useState(0);

  const { isLoading, isError } = useQuery('users', getUsers);

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
    </Container>
  );
};

export { Home };
