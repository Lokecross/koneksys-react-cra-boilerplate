import styled from 'styled-components';

export const Container = styled.div`
  background-image: linear-gradient(
    -90deg,
    var(--theme-shimmer-secondary) 0%,
    var(--theme-shimmer-primary) 50%,
    var(--theme-shimmer-secondary) 100%
  );
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;
