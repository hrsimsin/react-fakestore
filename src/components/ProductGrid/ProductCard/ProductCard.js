import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from '../../../context/ThemeContext';
import './ProductCard.css';
import { FaCartPlus } from 'react-icons/fa';
import CartContext from '../../../context/CartContext';

function ProductCard(props) {
    const theme = useContext(ThemeContext);
    const cart = useContext(CartContext);

    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        setQuantity(cart.getProductQuantity(props.product));
    }, []);

    return (
        <div className="product-card" style={{ backgroundColor: theme['bgc-fr-2'] }}>

            <h3 style={{ color: theme['txc-fr-2'] }}>{props.product.title}</h3>
            <div className="image">
                <img src={props.product.image} />
            </div>

            <p style={{ color: theme['txc-fr-2'] }}>
                {
                    props.product.description.length > 290 ? `${props.product.description.substr(0, 289)}...` : props.product.description
                }
            </p>
            <div className="bottom-row">
                <p style={{ color: theme['txc-fr-2'] }} className="price">${props.product.price}</p>
                {
                    (quantity == 0) &&
                    <button onClick={
                        () => { cart.addProduct(props.product); setQuantity(quantity + 1); }
                    } style={{
                        backgroundColor: theme['bgc-fr-1'],
                        color: theme['txc-fr-1']
                    }}>
                        <FaCartPlus />
                    </button>
                }
                {
                    (quantity != 0) &&
                    <div className="quantity-control">
                        <button className="btn-increase" onClick={
                            () => { cart.increaseProductQuantity(props.product); setQuantity(quantity+1); }
                        } style={{
                            backgroundColor: theme['bgc-fr-1'],
                            color: theme['txc-fr-1']
                        }}>
                            +
                        </button>
                        <div className="quantity" style={{
                            backgroundColor:theme['bgc-bg-1'],
                            color: theme['txc-bg-1']
                        }}>
                            {quantity}
                        </div>
                        <button className="btn-decrease" onClick={
                            () => { cart.decreaseProductQuantity(props.product); setQuantity(quantity-1); }
                        }
                         style={{
                            backgroundColor: theme['bgc-fr-1'],
                            color: theme['txc-fr-1']
                        }}>
                            -
                        </button>
                    </div>
                }
            </div>
        </div>
    );
}

export default ProductCard;