import React, { useContext, useState } from 'react';
import MenuContext from '../../../../context/MenuContext';
import ThemeContext from '../../../../context/ThemeContext';
import ColorUtils from '../../../../utils/ColorUtils';
import './MenuItem.css';

function MenuItem(props) {

    const [hover,setHover] = useState(false);

    const theme = useContext(ThemeContext);
    const menu = useContext(MenuContext);

    return (
        <li
            className={props.el.selected ? "selected" : ""}
            onMouseEnter={() => { setHover(true) }}
            onMouseLeave={() => {setHover(false)}}

            style={{
                color: theme['txc-fr-1'],
                backgroundColor: props.el.selected ? theme['bgc-fr-2'] : (hover ? ColorUtils.addAlpha(theme['bgc-fr-2'],0.4) : '' )
            }}
            onClick={() => { menu.select(props.el.name) }} key={props.index}>{props.el.icon}<span className="label">{props.el.name}</span></li>
    );
}

export default MenuItem;