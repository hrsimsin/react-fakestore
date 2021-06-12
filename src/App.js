import logo from './logo.svg';
import Header from './components/Header/Header';
import './App.css';
import MenuContext from './context/MenuContext';
import { useState } from 'react';
import ThemeContext from './context/ThemeContext';

function App() {

  const lightTheme = {
    name: 'light',
    'bgc-fr-1': '#1d3557',
    'bgc-fr-2': '#457b9d',
    'bgc-bg-1': '#a8dadc',
    'txc-fr-1': '#f1faee',
    'txc-fr-2': '#f1faee',
    'txc-bg-1': '#f1faee',
    toggle: () => setTheme(darkTheme)
  }

  const darkTheme = {
    name: 'dark',
    'bgc-fr-1': '#181818',
    'bgc-fr-2': '#202020',
    'bgc-bg-1': '#262626',
    'txc-fr-1': '#EFEFEF',
    'txc-fr-2': '#EFEFEF',
    'txc-bg-1': '#EFEFEF',
    toggle: () => setTheme(lightTheme)
  }

  const [menu, setMenu] = useState(
    {
      menuList: [
        {
          name: 'Products',
          selected: true
        },
        {
          name: 'Categories',
          selected: false
        },
        {
          name: 'Cart',
          selected: false
        }
      ],
      select: (name) => {
        var { menuList, ...rest } = menu;
        for (let item of menuList) {
          item.selected = false;
          if (item.name === name)
            item.selected = true;
        }
        setMenu({ menuList, ...rest });
      }
    });

  const [theme, setTheme] = useState(lightTheme)

  return (
    <MenuContext.Provider value={menu}>
      <ThemeContext.Provider value={theme}>
        <div className="main-container">
          <Header />
          <main style={{backgroundColor:theme['bgc-bg-1']}}>

          </main>
        </div>
      </ThemeContext.Provider>
    </MenuContext.Provider>
  );
}

export default App;
