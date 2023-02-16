import React from 'react';
import White_sep from '../../../assets/media/seprater-wht-icon.png';

const testimonials = (props) =>{
    return(
       <div id="testimonials" className={`rc_section ${props.mode ? props.mode : 'dark_mode'}`}>
            <div className='p-70' style={{backgroundImage: `url('${props.background.bg_img.Testimonial_BG}')`, backgroundPosition: `${props.background.bg_pos ? props.background.bg_pos : 'center center'}`, backgroundRepeat: `${props.background.bg_repeat ? props.background.bg_repeat : 'repeat'}`, backgroundSize: `${props.background.bg_size ? props.background.bg_size : 'cover'}` }}>
                <div className='rc_row f-justify-center'>
                    <div className='col-95 text-center'>
                        <h6 className='h6_tag'>{props.subtitle ? props.subtitle : 'TESTIMONIALS'}</h6>
                        <img className='seprater' src={White_sep} alt='Seprater'></img>
                        <div className='testimonials_quote mb-20'>
                            <p className='p_tag'>{props.quote ? props.quote : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}</p>
                        </div>
                        <div className='testimonials_footer rc_flex f-align-center f-justify-center'>
                            <p className='testimonials_name mr-10 mb-0'>{props.name ? props.name : 'Name'}</p>
                            <span> | </span>
                            <p className='testimonials_position ml-10 mb-0'>{props.position ? props.position : 'Position'}</p>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    );
}

export default testimonials;