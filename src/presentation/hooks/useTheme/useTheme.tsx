import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { dark, light } from '@styles/colors/themes';

import {
  ThemeProvider as StyledThemeProvider,
  DefaultTheme,
} from 'styled-components';

interface IThemeContext {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

interface IThemeProvider {
  children: JSX.Element | JSX.Element[];
}

const key = 'theme';

const ThemeProvider = ({ children }: IThemeProvider) => {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    const options = ['true', 'false'];

    if (storageValue && options.includes(storageValue)) {
      return JSON.parse(storageValue);
    }

    return false;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  const toggleTheme = useCallback(() => {
    setState(!state);
  }, [state]);

  const theme = useMemo(() => {
    return state ? dark : light;
  }, [state]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

const useTheme = (): IThemeContext => {
  const context = useContext(ThemeContext);

  return context;
};

export { useTheme, ThemeProvider };
