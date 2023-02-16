import React, { useState, useEffect } from "react"
import WormGro_Green_Logo from '../../../assets/media/WormGro_Green_Logo.png';
import { Link, useLocation } from 'react-router-dom';

const Header = (props) => {

    let location = useLocation();
    const [sticky, setSticky] = useState('');
    const addStickyClass = () => {
        if (window.scrollY >= 10) {
          setSticky('sticky');
        } else {
          setSticky('');
        }
    }

    useEffect(() => {
        addStickyClass()
        window.addEventListener("scroll", addStickyClass);
    })

    return (
        <header id="header" className={`${sticky} ${ (location.pathname === '/') ? 'transparent_hdr': 'color_hdr' } rc_section p-20 ${props.mode}_bg`}>
            <div className="rc_row">
                <div className="branding">
                    <Link to="/"><img src={WormGro_Green_Logo} alt="WormGro Logo"/></Link>
                </div>            
                <div className="navigation">
                    <ul className="nav_list">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about-wormgro">About WormGro</Link></li>
                        <li><Link to="/profit-and-planet">Profit & Planet</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/results">Results</Link></li> 
                        <li><Link to="/contact-order">Contact & Order</Link></li>
                        <li><Link to="/traffic-light">Traffic Light</Link></li>
                        <li className="moon_icon" onClick={props.themetoggle}>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.56 122.88"><defs></defs><title>night</title><path className="cls-1" d="M121.85,87.3A64.31,64.31,0,1,1,36.88.4c2.94-1.37,5.92.91,4.47,4.47a56.29,56.29,0,0,0,75.75,77.4l.49-.27a3.41,3.41,0,0,1,4.61,4.61l-.35.69ZM92.46,74.67H92A16.11,16.11,0,0,0,76.2,58.93v-.52a15.08,15.08,0,0,0,11-4.72,15.19,15.19,0,0,0,4.72-11h.51a15.12,15.12,0,0,0,4.72,11,15.12,15.12,0,0,0,11,4.72v.51A16.13,16.13,0,0,0,92.46,74.67Zm10.09-46.59h-.27a7.94,7.94,0,0,0-2.49-5.81A7.94,7.94,0,0,0,94,19.78v-.27A7.94,7.94,0,0,0,99.79,17a8,8,0,0,0,2.49-5.8h.27A8,8,0,0,0,105,17a8,8,0,0,0,5.81,2.49v.27A8,8,0,0,0,105,22.27a7.94,7.94,0,0,0-2.49,5.81Zm-41.5,8h-.41a12.06,12.06,0,0,0-3.78-8.82A12.06,12.06,0,0,0,48,23.5v-.41a12.07,12.07,0,0,0,8.82-3.78,12.09,12.09,0,0,0,3.78-8.82h.41a12.08,12.08,0,0,0,3.77,8.82,12.09,12.09,0,0,0,8.83,3.78v.41a12.09,12.09,0,0,0-8.83,3.78,12.08,12.08,0,0,0-3.77,8.82Z"/></svg>
                        </li>
                    </ul>
                </div>  
            </div>
        </header>
    );
};

export default Header;