import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from '../../../context/ThemeContext';
import { Link } from 'react-router-dom';
import './CategoryGrid.css';

const CategoryGrid = (props) => {

    const [data, setData] = useState(null);
    const theme = useContext(ThemeContext);

    useEffect(async () => {
        setData(null);
        const response = await fetch('https://fakestoreapi.com/products/categories');
        setData(await response.json());
    }, []);

    return (
        <>
            {
                data &&
                <div className="categories-container">
                    {
                        data.map((el, index) => <div
                            key={index} style={{
                                backgroundColor: theme['bgc-fr-2'],
                                color: theme['txc-fr-2']
                            }}><Link to={`/categories/${el}`}><h2 style={{ color: theme['txc-fr-2'] }}>{el}</h2></Link></div>)}
                </div>

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
};

export default CategoryGrid;