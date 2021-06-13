import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from '../../context/ThemeContext';
import './CategoryPage.css';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import CategoryGrid from './CategoryGrid/CategoryGrid';
import CategoryProductPage from './CategoryProductPage/CategoryProductPage';

function CategoryPage(props) {

    const [data, setData] = useState(null);
    const theme = useContext(ThemeContext);
    const { path, url } = useRouteMatch();

    useEffect(async () => {
        setData(null);
        const response = await fetch('https://fakestoreapi.com/products/categories');
        setData(await response.json());
    }, []);

    return (
        <Switch>
            <Route exact path={path}>
                <CategoryGrid />
            </Route>
            <Route path={`${path}/:category`}>
                <CategoryProductPage />
            </Route>
        </Switch>
    );
}

export default CategoryPage;