import { Provider as ReduxProvider } from 'react-redux';

import { reduxStore } from '@store';
import { GlobalStyles } from '@styles';

import { Routes } from './routes/routes';

const App = () => {
  return (
    <ReduxProvider store={reduxStore}>
      <GlobalStyles />
      <Routes />
    </ReduxProvider>
  );
};

export default App;
