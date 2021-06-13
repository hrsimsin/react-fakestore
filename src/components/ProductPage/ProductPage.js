import React, { useEffect, useState } from 'react';
import './ProductPage.css';
import ProductCard from './ProductCard/ProductCard';

function ProductPage(props) {

    const [data,setData] = useState(null);

    useEffect(async ()=>{
        setData(null);
        const response = await fetch('https://fakestoreapi.com/products');
        setData(await response.json());
    },[]);

    return (
        <div className="grid"> 
            {   
                data && data.map((el,index,arr) => <ProductCard product={el} key={index} />)
            }
        </div>
    );
}

export default ProductPage;