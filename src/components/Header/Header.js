import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import './Header.css';
import SideMenu from './SideMenu/SideMenu';
import DarkModeToggle from "react-dark-mode-toggle";

function Header(props) {
    const theme = useContext(ThemeContext);
    return (
        <header style={{ backgroundColor: theme['bgc-fr-1'] }}>
            <h1 style={{ color: theme['acc'] }}>Fake<span className="strong">Store</span></h1>
            <SideMenu />
            <div style={{ backgroundColor: theme['bgc-fr-2']}} className="theme-toggle">
                <DarkModeToggle
                    onChange={theme.toggle}
                    checked={theme.name === 'dark'}
                    size={60}
                />
            </div>

        </header>
    );
}

export default Header;