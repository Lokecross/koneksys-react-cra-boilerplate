import styled from 'styled-components';

import { toast, ToastContainer } from 'react-toast';
import { ToastConfig } from 'react-toast/dist/types';

const Container = styled.div`
  .toast {
    border-radius: 4px;
    padding: 10px 15px;
  }
`;

const ToastProvider = () => {
  return (
    <Container>
      <ToastContainer delay={3000} position="bottom-center" />
    </Container>
  );
};

const useToast = () => {
  const success = (message: string) => toast.success(message);

  const error = (message: string) =>
    toast.error(message, {
      backgroundColor: '#f03',
    });

  const info = (message: string) => toast.info(message);

  const warn = (message: string) => toast.warn(message);

  const custom = (message: string, config: ToastConfig) =>
    toast(message, config);

  return {
    toast: {
      success,
      error,
      info,
      warn,
      custom,
    },
  };
};

export { useToast, ToastProvider };
