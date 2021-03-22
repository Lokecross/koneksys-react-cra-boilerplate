import { Provider as ReduxProvider } from 'react-redux';

import { GlobalStyles } from '../presentation/styles';
import { Routes } from './routes/routes';

import { reduxStore } from '../presentation/store';

const App = () => {
  return (
    <ReduxProvider store={reduxStore}>
      <GlobalStyles />
      <Routes />
    </ReduxProvider>
  );
};

export default App;
