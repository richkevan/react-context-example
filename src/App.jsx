// App.js
// Imported the following.
// 1. useContext hook from react.
// 2. Context name and the Context provider component from the context
import { useContext } from 'react';
import { DarkMode, DarkModeProvider } from './ThemeContext';
import Clone from './Clone';

// Child theme component with useContext hook to subscribe to name context
const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(DarkMode);

  return (
    <div style={{
      background: theme === 'off' ? '#fff' : '#333',
      color: theme === 'off' ? '#000' : '#fff',
      borderColor: theme === 'off' ? '#00f' : '#ff0',
      borderWidth: '15px',
      borderStyle: 'solid',
      textAlign: 'center',
      height: "90vh", 
      width: "30vw"
    }}>
      <p>Dark Mode is {theme} in the ThemeContext.jsx</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

// Child theme component with useContext hook to subscribe to name context
const Duplicate = () => {
  const { theme, toggleTheme } = useContext(DarkMode);

  return (
    <div style={{
      background: theme === 'on' ? '#fff' : '#333',
      color: theme === 'on' ? '#000' : '#fff',
      borderColor: theme === 'on' ? '#0f0' : '#f0f',
      borderWidth: '15px',
      borderStyle: 'solid',
      textAlign: 'center',
      height: "90vh", 
      width: "30vw"
    }}>
      <p>Dark Mode is {theme} in the ThemeContext.jsx</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

// Child components are wrapped in the Theme provider and buttons in each separate component affect all other components to demonstrate a global use context.
const App = () => {
  return (
    <DarkModeProvider>
    <div style={{display: "flex",
    flexDirection: "row"}}>
      <ThemedComponent /> 
      <Duplicate />
      <Clone />
    </div>
    </DarkModeProvider>
  );
};

export default App;

