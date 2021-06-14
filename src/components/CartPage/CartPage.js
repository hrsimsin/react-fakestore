import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../context/CartContext';
import ThemeContext from '../../context/ThemeContext';
import CartItem from './CartItem/CartItem';
import './CartPage.css';

function CartPage(props) {
    const cart = useContext(CartContext);
    const theme = useContext(ThemeContext);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        var sum = 0; 
        for(let product of cart.products){
            sum += product.price * product.quantity;
        }
       setTotal(sum);
    }, [cart]);

    return (
        <div className="cartpage">
            {
                (cart.products.length == 0) &&
                <div className="span-page-center">
                    <h1 style={{
                        color: theme['txc-bg-1']
                    }}>Cart is Empty.</h1>
                </div>
            }
            {
                (cart.products.length != 0) &&
                <div className="cart-info">
                    <div className="cart-items-container">
                        {
                            cart.products.map((el, index) => <CartItem key={index} product={el} />)
                        }
                    </div>
                    <h2 className="total" style={{ color: theme['txc-bg-1'] }}>
                        Total Amount : ${total}
                    </h2>
                </div>
            }
        </div>
    );
}

export default CartPage;