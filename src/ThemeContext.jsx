/* eslint-disable react/prop-types */
// ThemeContext.js
import { createContext, useState } from 'react';

// Create the context
// Name of the context
export const DarkMode = createContext();

// Create a provider component
// In the provider component we have,
// 1. UseState with the state and set state variables
// 2. Function that sets state
// 3. Named context provider with state and function as props
// 4. Child props which renders anything inside the provider component
export const DarkModeProvider = ({ children }) => {
  const [theme, setTheme] = useState('off');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'off' ? 'on' : 'off'));
  };

  return (
    <DarkMode.Provider 
    value={{ theme, toggleTheme }}>
      {children}
    </DarkMode.Provider>
  );
};