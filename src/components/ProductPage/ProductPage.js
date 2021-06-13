import React, { useEffect, useState } from 'react';
import './ProductPage.css';
import ProductCard from '../ProductGrid/ProductCard/ProductCard';
import ProductGrid from '../ProductGrid/ProductGrid';

function ProductPage(props) {

    const [data, setData] = useState(null);

    useEffect(async () => {
        setData(null);
        const response = await fetch('https://fakestoreapi.com/products');
        setData(await response.json());
    }, []);

    return (
        <>
            {
                data && <ProductGrid products={data} />
            }
        </>
    );
}

export default ProductPage;