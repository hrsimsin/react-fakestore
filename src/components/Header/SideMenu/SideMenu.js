import React, { useContext } from 'react';
import MenuContext from '../../../context/MenuContext';
import ThemeContext from '../../../context/ThemeContext';
import './SideMenu.css';

const SideMenu = (props) => {
    const menu = useContext(MenuContext);
    const theme = useContext(ThemeContext);
    return (
        <nav>
            <ul>
                {
                    menu.menuList.map((el,index,arr)=><li className={el.selected ? "selected" : ""} 
                    style={{
                        color:theme['txc-fr-1']
                    }}
                    onClick={()=>{menu.select(el.name)}} key={index}>{el.name}</li>)
                }
            </ul>
        </nav>
    );
}

export default SideMenu;