import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { Home } from '@pages';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@hooks';
import { store } from '@store/redux/store';
import { QueryClient, QueryClientProvider } from 'react-query';

export const createMockStore = () => ({
  ...store,
  persistor: {
    persist: () => null,
  },
});
const queryClient = new QueryClient();
test('Renders Home page and match to previous snapshot', () => {
  const mockStore = createMockStore();
  // jest.mock('@hookstate/core', () => {
  //   return jest.fn(() => 1);
  // });
  const component = shallow(
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={mockStore}>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </ReduxProvider>
    </QueryClientProvider>,
  );
  expect(component).toMatchSnapshot();
});
