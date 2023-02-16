import React from 'react';
import Title from '../../global/module/title_subtitle';
import BoldText from '../../global/module/bold_text';
import Grey_sep from '../../../assets/media/seprater-grey-icon.png';
import ContactForm from '../../global/module/contact-form';

const content= (props) => {
   return(
        <div id="content_info" className='rc_section p-70'>
            <div className='rc_row'>
                <div className='col-65 pr-30'>
                    <Title sub={props.content_left.subtitle} title={props.content_left.heading} desc={props.content_left.paragraph}/>
                    <BoldText bold_txt={props.content_left.page_content.bold_text} desc={props.content_left.page_content.text}/>
                </div>
                <div className='col-35'>
                    <h6 className='h6_tag'>{props.content_right.subtitle ? props.content_right.subtitle : 'SUBTITLE GOES HERE'}</h6>
                    <img src={Grey_sep} className='seprater' alt='WormGro Green Seprater'></img>
                    <ContactForm 
                        name_placeholder={props.content_right.form_placeholder.name}
                        email_placeholder={props.content_right.form_placeholder.email}
                        phone_placeholder={props.content_right.form_placeholder.phone}
                        address_placeholder={props.content_right.form_placeholder.address}
                        farmsize_placeholder={props.content_right.form_placeholder.farm_size}
                        message_placeholder={props.content_right.form_placeholder.message}
                        btn_txt={props.content_right.form_button.button_txt}
                        btn_class={props.content_right.form_button.button_class}
                    />
                </div>
            </div>
        </div>
   );
}

export default content;