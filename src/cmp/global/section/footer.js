import React from 'react';
import WormGro_White_Logo from '../../../assets/media/WormGro_White_Logo.png';
import White_sep from '../../../assets/media/seprater-wht-icon.png';
import SXC_logo from '../../../assets/media/SXC-logo-300.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const footer = () => {
    return(
        <div id='footer' className='rc_section'>
            <div className='footer_top green_bg dark_mode p-70'>
                <div className='rc_row'>
                    <div className='col-50 pr-50 branding'>
                        <a href="/"><img src={WormGro_White_Logo} alt="WormGro White Logo" className='mb-20'/></a>
                        <p className='p_tag mb-15 fontSize18'>WormGro Limited</p>
                        <img className='seprater' src={White_sep} alt='Seprater'></img>
                        <p className='p_tag'>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='col-35 info'>
                        <a href="tel:0427573424" className='call'><p className='fontSize18 mb-0'>Call 0427573424</p></a>
                        <a href="mailto:george@wormgro.com.au" className='mail'><p className='fontSize18'>george@wormgro.com.au</p></a>
                        <img className='seprater' src={White_sep} alt='Seprater'></img>
                        <p className='p_tag address'>PO Box 343 Gin Gin, QLD, Australia 4671</p>
                        <img className='seprater' src={White_sep} alt='Seprater'></img>
                        <p className='p_tag address'>Follow Us</p>
                        <div className='social_links'>
                            <a href='https://www.instagram.com/' target='_blank'>
                                <FontAwesomeIcon icon={faInstagram} color='white'/>
                            </a>
                            <a href='https://www.facebook.com/' target='_blank'>
                                <FontAwesomeIcon icon={faFacebook} color='white'/>
                            </a>
                        </div>
                    </div>
                    <div className='col-15 certified'>
                        <p className='p_tag mb-15 fontSize18'>Certified for use in organic production</p>
                        <img className='seprater' src={White_sep} alt='Seprater'></img>
                        <img className='border-circle' src={SXC_logo} width="120" alt='SXC Logo'></img>
                    </div>
                </div>
            </div>
            <div className='footer_bottom p-20'>
                <div className='rc_row f-align-center color-green'>
                    <div className='col-50 copyright'>
                        <p className='p_tag mb-0'>© Copyright 2022 WormGro Limited</p>
                    </div>
                    <div className='col-50 develop text-right'>
                        <p className='p_tag mb-0'>Site by Vishal</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default footer;