import React, { useContext, useEffect, useState } from 'react';
import './ProductGrid.css';
import ProductCard from './ProductCard/ProductCard';
import ThemeContext from '../../context/ThemeContext';

function ProductGrid(props) {
    const theme = useContext(ThemeContext);

    const [input, setInput] = useState("");
    const [displayProducts,setDisplayProducts] = useState(props.products);

    useEffect(()=>{
        if(!input){
            setDisplayProducts(displayProducts);
        }
        else{
            setDisplayProducts(props.products.filter(el => {
               return el.title.toLowerCase().includes(input.toLowerCase());
            }));
        }
    },[input]);

    return (
        <div className="product-grid-container">

            <input  
            placeholder="Search for Products"
            name="search-input"
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            style={{
                backgroundColor:theme['bgc-fr-2'],
                color:theme['txc-fr-2'],
                border:`3px solid ${theme['acc']}`
            }}
            className="product-search" />

            <div className="grid">
                {
                    displayProducts.map((el, index, arr) => <ProductCard product={el} key={index} />)
                }
            </div>
        </div>
    );
}

export default ProductGrid;