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
    'bgc-fr-1': '#03045e',
    'bgc-fr-2': '#90e0ef',
    'bgc-bg-1': '#FFF',
    'txc-fr-1': '#f1faee',
    'txc-fr-2': '#1d3557',
    'txc-bg-1': '#000',
    'acc': '#ffd60a',
    'txc-acc':'#03045e',
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
    'acc': '#ffd60a',
    'txc-acc':'#03045e',
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
        }
      ]
    });

  const [theme, setTheme] = useState(lightTheme);

  const [cart, setCart] = useState({
    products: [],
    addProduct: (product) => {cart.products.push({ ...product, quantity: 1 }); setCart({...cart}); },
    increaseProductQuantity: (product) => {
      const prd = cart.products.filter(el => el.id === product.id)[0];
      if (prd)
        prd.quantity += 1;
      setCart({...cart});
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
      setCart({...cart});
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
