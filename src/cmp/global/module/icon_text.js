import React from 'react';
import SampleIcon from '../../../assets/media/WormGro-icon-1.png';

const icon_text = (props) => {
    return(
        <div className='icon_with_text rc_flex f-align-center'>
            <div className='icon_img'>
                <img src={props.icon_img} alt='Icon'></img>
            </div>
            <div className='icon_text'>
                <p className='p_tag'>{props.icon_txt ? props.icon_txt : "Lorem Ipsum is simply dummy text"}</p>
            </div>
        </div>
    );
}

export default icon_text;