import React from 'react';
import './ProductGrid.css';
import ProductCard from './ProductCard/ProductCard';

function ProductGrid(props) {
    return (
        <div className="grid"> 
        {   
            props.products.map((el,index,arr) => <ProductCard product={el} key={index} />)
        }
    </div>
    );
}

export default ProductGrid;