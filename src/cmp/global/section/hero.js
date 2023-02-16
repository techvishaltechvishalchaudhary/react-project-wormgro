import React from 'react';
import White_sep from '../../../assets/media/seprater-wht-icon.png';

const hero = (props) => {
    return(
        <div id="hero" className='rc_section'>
            <div className='p-70 background_banner' style={{backgroundImage: `url('${props.background.bg_img.BGBanner}')`, backgroundPosition: `${props.background.bg_pos ? props.background.bg_pos : 'center center'}`, backgroundRepeat: `${props.background.bg_repeat ? props.background.bg_repeat : 'repeat'}`, backgroundSize: `${props.background.bg_size ? props.background.bg_size : 'cover'}` }}>
                <div className='bg_overlay'></div>
                <div className='rc_row f-align-center mh-180'>
                    <div className='col-50 dark_mode'>
                        <h6 className='h6_tag mb-20'>{props.content.subtitle ? props.content.subtitle : 'SUBTITLE GOES HERE'}</h6>
                        <img src={White_sep} className='seprater' alt='WormGro Green Seprater'></img>
                        <h1 className='h2_tag fontSize46 mb-0'>{props.content.heading ? props.content.heading : 'Hero Title Goes Here'}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default hero;