import React, { useContext, useEffect, useState } from 'react';
import './ProductPage.css';
import ProductCard from '../ProductGrid/ProductCard/ProductCard';
import ProductGrid from '../ProductGrid/ProductGrid';
import ThemeContext from '../../context/ThemeContext';

function ProductPage(props) {

    const [data, setData] = useState(null);
    const theme = useContext(ThemeContext);

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
            {
                !data &&
                <div className="loader-layout">
                    <div style={{
                        borderColor:theme['bgc-fr-1'],
                        borderTopColor:theme['txc-fr-1'],
                    }} className="loader"></div>
                </div>
            }
        </>
    );
}

export default ProductPage;