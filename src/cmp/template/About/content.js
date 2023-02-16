import React from 'react';
import Title from '../../global/module/title_subtitle';
import BoldText from '../../global/module/bold_text';

const content = (props) => {
    return (
        <div id="content_info" className='rc_section p-70'>
            <div className='rc_row'>
                <div className='col-65 pr-50'>
                    <Title sub={props.content_left.subtitle} title={props.content_left.heading} desc={props.content_left.paragraph}/>
                    <BoldText bold_txt={props.content_left.page_content.bold_text} desc={props.content_left.page_content.text}/>
                </div>
                <div className='col-35'>
                    <img src={props.content_right.image.FertilityCycle} className='cycle mb-20' width="312" alt="Fertility Cycle"/>
                    <h2 className='h2_tag'>{props.content_right.heading ? props.content_right.heading : 'Heading Goes Here'}</h2>  
                    <p className='p_tag'>{props.content_right.paragraph ? props.content_right.paragraph : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at semper magna. Nunc placerat est pulvinar ante maximus, et facilisis elit tristique.'}</p>
                </div>
            </div>
        </div>
    );
};

export default content;