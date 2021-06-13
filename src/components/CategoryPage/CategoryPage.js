import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from '../../context/ThemeContext';
import './CategoryPage.css';

function CategoryPage(props) {

    const [data,setData] = useState(null);
    const theme = useContext(ThemeContext);

    useEffect(async ()=>{
        setData(null);
        const response = await fetch('https://fakestoreapi.com/products/categories');
        setData(await response.json());
    },[]);

    return (
        <div className="categories-container">
            {
                data && data.map(el => <div style={{
                    backgroundColor:theme['bgc-fr-2'],
                    color:theme['txc-fr-2']
                }}><h2>{el}</h2></div>)
            }
        </div>
    );
}

export default CategoryPage;