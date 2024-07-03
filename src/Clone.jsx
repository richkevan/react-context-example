import { useContext } from 'react';
import { DarkMode } from './ThemeContext';
// useContext hook is imported and subscribed in an imported component
const Clone = () => {
  const { theme, toggleTheme } = useContext(DarkMode);

  return (
    <div style={{
      background: theme === 'on' ? '#fff' : '#333',
      color: theme === 'on' ? '#000' : '#fff',
      borderColor: theme === 'on' ? '#f00' : '#0ff',
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

export default Clone