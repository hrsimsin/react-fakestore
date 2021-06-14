import React, { useContext } from 'react';
import CartContext from '../../../context/CartContext';
import ThemeContext from '../../../context/ThemeContext';
import './CartItem.css';

const CartItem = (props) => {
    const theme = useContext(ThemeContext);
    const cart = useContext(CartContext);
    return (
        <div
            style={{
                backgroundColor: theme['bgc-fr-2']
            }}
            class="item-card">
            <span className="item-title" style={{ color: theme['txc-fr-2'] }}>{props.product.title}</span>
            <div className="amount-info">
                <div className="quantity-control">
                    <button className="btn-increase" onClick={
                        () => { cart.increaseProductQuantity(props.product); }
                    } style={{
                        backgroundColor: theme['acc'],
                        color: theme['txc-acc']
                    }}>
                        +
                    </button>
                    <div className="quantity" style={{
                        backgroundColor: theme['bgc-bg-1'],
                        color: theme['txc-bg-1']
                    }}>
                        {props.product.quantity}
                    </div>
                    <button className="btn-decrease" onClick={
                        () => { cart.decreaseProductQuantity(props.product); }
                    }
                        style={{
                            backgroundColor: theme['acc'],
                            color: theme['txc-acc']
                        }}>
                        -
                    </button>
                </div>
                <span style={{
                    color: theme['txc-fr-2']
                }} className="amount-multiply">
                    * ${props.product.price} = ${props.product.price * props.product.quantity}
                </span>
            </div>

        </div>
    );
};

export default CartItem;