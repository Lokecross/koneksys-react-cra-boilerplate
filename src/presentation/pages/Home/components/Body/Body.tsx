import { useState } from '@hookstate/core';

import { useAppDispatch, useAppSelector } from '@store/redux/store';
import { increment } from '@store/redux/features/counter';

import { useTheme } from '@hooks';

import { Button } from '@components';

import { User } from './components';

import { Container, Label } from './Body.styles';

const Body = () => {
  const { counter } = useAppSelector();
  const dispatch = useAppDispatch();

  const { toggleTheme, theme } = useTheme();

  const state = useState(0);

  return (
    <Container>
      <User />

      <Label>redux: {counter.value}</Label>
      <Button
        style={{ borderTopLeftRadius: 0 }}
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment redux
      </Button>

      <Label>state: {state.get()} </Label>
      <Button
        style={{ borderTopLeftRadius: 0 }}
        onClick={() => state.set(p => p + 1)}
      >
        Increment
      </Button>

      <Label>{`theme: ${theme.title}`}</Label>

      <Button style={{ borderTopLeftRadius: 0 }} onClick={toggleTheme}>
        toggle theme
      </Button>
    </Container>
  );
};

export { Body };
