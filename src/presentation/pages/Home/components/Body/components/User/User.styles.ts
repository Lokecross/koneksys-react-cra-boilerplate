import styled from 'styled-components';

export const Container = styled.div`
  background: var(--theme-background-secondary);
  border: 1px solid var(--theme-border-secondary);

  padding: 10px 15px;
  border-radius: 4px;
`;

export const Text = styled.div`
  color: var(--theme-color-primary);

  & + & {
    margin-top: 5px;
  }
`;
