import React, { ReactNode, useEffect } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * ThemeProvider component that ensures the application uses the Propulsion Society theme
 * 
 * This component applies the dark theme with propulsion-society styling on mount
 */
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  useEffect(() => {
    // Apply dark theme with propulsion-society
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-theme', 'propulsion-society');
    localStorage.setItem('theme', 'dark');
  }, []);

  return <>{children}</>;
};

export default ThemeProvider;