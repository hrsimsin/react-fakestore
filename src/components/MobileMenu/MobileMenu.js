import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import './MobileMenu.css';
import SideMenu from '../Header/SideMenu/SideMenu';
import DarkModeToggle from 'react-dark-mode-toggle';

const MobileMenu = (props) => {
    const theme = useContext(ThemeContext);
    return (
        <div style={{backgroundColor:theme['bgc-fr-1']}} className="mobile-menu">
            <SideMenu mobileMode={true}/>
            <div style={{ backgroundColor: theme['bgc-fr-2'] }} className="theme-toggle-mobile">
                <DarkModeToggle
                    onChange={theme.toggle}
                    checked={theme.name === 'dark'}
                    size={60}
                />
            </div>
        </div>
    );
};

export default MobileMenu;