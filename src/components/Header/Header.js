import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import './Header.css';
import SideMenu from './SideMenu/SideMenu';
import DarkModeToggle from "react-dark-mode-toggle";

function Header(props) {
    const theme = useContext(ThemeContext);
    return (
        <header style={{ backgroundColor: theme['bgc-fr-1'] }}>
            <h1 style={{ color: theme['txc-fr-1'] }}>Fake Store</h1>
            <SideMenu />
            <DarkModeToggle
                className="theme-toggle"
                onChange={theme.toggle}
                checked={theme.name === 'dark'}
                size={60}
            />
        </header>
    );
}

export default Header;