import React, { createContext, useContext, useEffect, useState } from 'react';
import { generateTheme } from '../../styles/theme';
import { useSelector } from 'react-redux';
import {
  getPrimaryColor,
  getSecondaryColor
} from '../../store/features/overriddenConfig/selectors';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ providedTheme, children }) => {
  const overriddenPrimaryColor = useSelector(getPrimaryColor);
  const overriddenSecondaryColor = useSelector(getSecondaryColor);

  const [theme, setTheme] = useState(() => {
    if (providedTheme) {
      return providedTheme;
    }

    return generateTheme(overriddenPrimaryColor, overriddenSecondaryColor);
  });

  useEffect(() => {
    if (providedTheme) {
      setTheme(providedTheme);
      return;
    }

    const defaultTheme = generateTheme(overriddenPrimaryColor, overriddenSecondaryColor);

    setTheme(defaultTheme);
  }, [overriddenPrimaryColor, overriddenSecondaryColor, providedTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
