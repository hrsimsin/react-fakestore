import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductGrid from '../../ProductGrid/ProductGrid';

function CategoryProductPage(props) {
    const { category } = useParams();
    const [data, setData] = useState(null);


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
        </>
    );
}

export default CategoryProductPage;