import React, { useContext } from 'react';
import ThemeContext from '../../../context/ThemeContext';
import './ProductCard.css';

function ProductCard(props) {
    const theme = useContext(ThemeContext);

    return (
        <div className="product-card" style={{ backgroundColor: theme['bgc-fr-2'] }}>
            <h3 style={{ color: theme['txc-fr-2'] }}>{props.product.title}</h3>
            <div className="image">
                <img src={props.product.image} />
            </div>
            
            <p style={{ color: theme['txc-fr-2'] }}>
                {
                props.product.description.length > 290 ? `${props.product.description.substr(0,289)}...` :  props.product.description 
                }
            </p>
            <p style={{ color: theme['txc-fr-2'] }} className="price">${props.product.price}</p>
        </div>
    );
}

export default ProductCard;