import React from 'react';
import Title from '../../global/module/title_subtitle';
import BoldText from '../../global/module/bold_text';
import CTA from '../../global/module/cta';

const content = (props) => {
    return (
        <div id="content_info" className='rc_section p-70'>
            <div className='rc_row'>
                <div className='col-65 pr-50'>
                    <Title sub={props.content_left.subtitle} title={props.content_left.heading} desc={props.content_left.paragraph}/>
                </div>
                <div className='col-35 pr-50'>
                    <CTA cta_title={props.content_right.cta_heading} cta_btn_txt={props.content_right.cta_button_text} cta_btn_url={props.content_right.cta_button_url} cta_btn_class={props.content_right.cta_button_class}/>
                </div>
            </div>
        </div>
    );
};

export default content;