import { HTMLProps } from 'react';

import { Container } from './Button.styles';

const Button = ({ children, onClick }: HTMLProps<HTMLButtonElement>) => {
  return <Container onClick={onClick}>{children}</Container>;
};

export { Button };
