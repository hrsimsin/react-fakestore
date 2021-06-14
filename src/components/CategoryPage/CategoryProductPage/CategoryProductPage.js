import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ThemeContext from '../../../context/ThemeContext';
import ProductGrid from '../../ProductGrid/ProductGrid';
import './CategoryProductPage.css';

function CategoryProductPage(props) {
    const { category } = useParams();
    const [data, setData] = useState(null);
    const theme = useContext(ThemeContext);


    useEffect(async () => {
        setData(null);
        const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
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

export default CategoryProductPage;