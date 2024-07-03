# React Context Example: Light/Dark Mode
This repository demonstrates how to use React Context to implement a light/dark mode toggle in a React application.

### Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Code Explanation](#code-explanation)
  - [Context Setup](#context-setup)
  - [Provider Component](#provider-component)
  - [Consuming Context](#consume-context)
  - [Example Components](#example-components)
- [Contributing](#contributing)
- [License](#license)

### Introduction
React Context provides a way to pass data through the component tree without having to pass props down manually at every level. This example uses React Context to create a theme toggle for light and dark modes.

### Installation
1. Clone the repository:
``` zsh
https://github.com/richkevan/react-context-example.git
```
2. Navigate to the project directory:
``` zsh
cd react-context-example
```

3. Install the dependencies:
``` zsh
npm install
```

### Usage
To start the application, run:
``` zsh
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### Code Explanation
##### Context Setup
First, we create a context for the theme:
``` jsx
/* ThemeContext.jsx */
import { createContext, useState } from 'react';

// Create the context
// Name of the context
export const DarkMode = createContext();
```
##### Provider Setup
Next, we create a provider component that will wrap our application and provide the theme context:
``` jsx
/* ThemeContext.jsx */
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
```

### Consume Context
To use the context in a component, we call the useContext hook within our component:
``` jsx
/* Clone.jsx */
import { useContext } from 'react';
import { DarkMode } from './ThemeContext';

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
```

##### Example Components
Next, we use the provider component to provide the theme context:
``` jsx
/* App.jsx */
import { DarkModeProvider } from './ThemeContext';

const App = () => {
  return (
    <DarkModeProvider>
      <ThemedComponent /> 
      <Duplicate />
      <Clone />
    </DarkModeProvider>
  );
};

export default App;
```

```JSX
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
```
```JSX
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
```

### Contributing
Contributions are welcome! Please open an issue or submit a pull request.

### License
This project is licensed under the MIT License.

