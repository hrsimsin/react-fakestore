import React, { useContext, useEffect, useState } from 'react';
import MenuContext from '../../../../context/MenuContext';
import ThemeContext from '../../../../context/ThemeContext';
import ColorUtils from '../../../../utils/ColorUtils';
import './MenuItem.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function MenuItem(props) {

    const [hover, setHover] = useState(false);
    const [selected,setSelected] = useState(false);
    const location = useLocation();
    const theme = useContext(ThemeContext);
    const menu = useContext(MenuContext);

    useEffect(()=>{
        const minLen = Math.min(props.el.link.length,location.pathname.length);
        setSelected(props.el.link.substr(0,minLen) == location.pathname.substr(0,minLen));
    },[location]);

    useEffect(()=>{
        const minLen = Math.min(props.el.link.length,location.pathname.length);
        setSelected(props.el.link.substr(0,minLen) == location.pathname.substr(0,minLen));
    },[]);

    return (
        <Link to={props.el.link}>
            <li
                className={
                    (selected) ? "selected" : ""
                }
                onMouseEnter={() => { setHover(true) }}
                onMouseLeave={() => { setHover(false) }}

                style={{
                    color: theme['txc-fr-1'],
                    backgroundColor: (selected) ? theme['bgc-fr-2'] : (hover ? ColorUtils.addAlpha(theme['bgc-fr-2'], 0.4) : '')
                }}
                 key={props.index}>{props.el.icon}<span className="label">{props.el.name}</span></li>
        </Link>
    );
}

export default MenuItem;