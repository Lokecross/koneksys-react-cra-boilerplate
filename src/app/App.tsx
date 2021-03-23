import { Provider as ReduxProvider } from 'react-redux';

import { QueryClient, QueryClientProvider } from 'react-query';

import { PersistGate } from 'redux-persist/integration/react';

import { reduxStore, reduxPersistor } from '@store';
import { GlobalStyles } from '@styles';

import { Routes } from './routes/routes';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={reduxStore}>
        <PersistGate persistor={reduxPersistor}>
          <GlobalStyles />
          <Routes />
        </PersistGate>
      </ReduxProvider>
    </QueryClientProvider>
  );
};

export default App;
