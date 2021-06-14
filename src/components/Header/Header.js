import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import MenuContext from '../../context/MenuContext';
import './Header.css';
import SideMenu from './SideMenu/SideMenu';
import DarkModeToggle from "react-dark-mode-toggle";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

function Header(props) {
    const theme = useContext(ThemeContext);
    const menu = useContext(MenuContext);

    return (
        <header style={{ backgroundColor: theme['bgc-fr-1'] }}>
            <h1 style={{ color: theme['acc'] }}>Fake<span className="strong">Store</span></h1>
            <div className="desk-side-menu">
                <SideMenu />
            </div>
            <div style={{ backgroundColor: theme['bgc-fr-2'] }} className="theme-toggle">
                <DarkModeToggle
                    onChange={theme.toggle}
                    checked={theme.name === 'dark'}
                    size={60}
                />
            </div>
            {
                !menu.mobileMenuOpen && <span className="menu-toggle" onClick={() => { menu.setMobileMenuOpen(true) }} style={{ color: theme['acc'] }}><AiOutlineMenu /></span>
            }
            {
                menu.mobileMenuOpen && <span className="menu-toggle" onClick={() => { menu.setMobileMenuOpen(false) }} style={{ color: theme['acc'] }}><AiOutlineClose /></span>
            }
        </header>
    );
}

export default Header;