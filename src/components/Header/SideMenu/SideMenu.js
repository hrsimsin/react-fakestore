import React, { useContext } from 'react';
import MenuContext from '../../../context/MenuContext';
import ThemeContext from '../../../context/ThemeContext';
import ColorUtils from '../../../utils/ColorUtils';
import MenuItem from './MenuItem/MenuItem';
import './SideMenu.css';

const SideMenu = (props) => {
    const menu = useContext(MenuContext);
    return (
        <nav>
            <ul>
                {
                    menu.menuList.map((el,index,arr)=>  <MenuItem mobileMode={props.mobileMode} key={index} el={el} index={index} />)
                }
            </ul>
        </nav>
    );
}

export default SideMenu;