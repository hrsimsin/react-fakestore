import logo from './logo.svg';
import Header from './components/Header/Header';
import './App.css';
import MenuContext from './context/MenuContext';
import { useEffect, useState } from 'react';
import ThemeContext from './context/ThemeContext';
import { FaGifts, FaShoppingCart, FaLayerGroup } from 'react-icons/fa';
import { RiLogoutBoxRFill } from "react-icons/ri";
import ProductPage from './components/ProductPage/ProductPage';
import CategoryPage from './components/CategoryPage/CategoryPage';
import CartPage from './components/CartPage/CartPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useHistory
} from "react-router-dom";

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
          selected: true,
          icon: <FaGifts />,
          link: '/products'
        },
        {
          name: 'Categories',
          selected: false,
          icon: <FaLayerGroup />,
          link: '/categories'
        },
        {
          name: 'Cart',
          selected: false,
          icon: <FaShoppingCart />,
          link: '/cart'
        },
        {
          name: 'Logout',
          selected: false,
          icon: <RiLogoutBoxRFill />
        }
      ],
      select: (name) => {
        var { menuList, ...rest } = menu;
        menuList = menuList.map(el => { el.selected = (el.name === name); return el; })
        setMenu({ menuList, ...rest });
      },
      getSelected: () => menu.menuList.filter(el => el.selected)[0]
    });

  const [theme, setTheme] = useState(lightTheme);

  return (
    <MenuContext.Provider value={menu}>
      <ThemeContext.Provider value={theme}>
        <Router>
          <div className="main-container">
            <Header />
            <main style={{ backgroundColor: theme['bgc-bg-1'] }}>
              <Switch>
                <Route exact path="/">
                  <Redirect to="/products" />
                </Route>
                <Route path="/products">
                  <ProductPage />
                </Route>
                <Route path="/categories">
                  <CategoryPage />
                </Route>
                <Route path="/cart">
                  <CartPage />
                </Route>
              </Switch>
            </main>
          </div>
        </Router>
      </ThemeContext.Provider>
    </MenuContext.Provider>
  );
}

export default App;
