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
import CartContext from './context/CartContext';

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
    'txc-bg-1': '#000',
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
          icon: <FaGifts />,
          link: '/products'
        },
        {
          name: 'Categories',
          icon: <FaLayerGroup />,
          link: '/categories'
        },
        {
          name: 'Cart',
          icon: <FaShoppingCart />,
          link: '/cart'
        },
        {
          name: 'Logout',
          icon: <RiLogoutBoxRFill />,
          link: '/logout'
        }
      ]
    });

  const [theme, setTheme] = useState(lightTheme);

  const [cart, setCart] = useState({
    products: [],
    addProduct: (product) => cart.products.push({ ...product, quantity: 1 }),
    increaseProductQuantity: (product) => {
      const prd = cart.products.filter(el => el.id === product.id)[0];
      if (prd)
        prd.quantity += 1;
    },
    decreaseProductQuantity: (product) => {
      const prd = cart.products.filter(el => el.id === product.id)[0];
      if (prd) {
        if (prd.quantity === 1) {
          cart.products = cart.products.filter(el => el.id !== product.id);
        }
        else {
          prd.quantity -= 1;
        }
      }
    },
    getProductQuantity: (product) => {
      const prd = cart.products.filter(el => el.id === product.id)[0];
      if (prd) {
        return prd.quantity;
      }
      return (0);
    }
  });

  return (
    <MenuContext.Provider value={menu}>
      <ThemeContext.Provider value={theme}>
        <CartContext.Provider value={cart}>
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
        </CartContext.Provider>
      </ThemeContext.Provider>
    </MenuContext.Provider>
  );
}

export default App;
