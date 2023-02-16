import React from 'react';
import Button from '../module/button';

const cta = (props) => {
    return (
        <div className='cta'>
            <p className='p_tag fontSize26'>{props.cta_title ? props.cta_title : 'Call to action heading goes here.'}</p>
            <Button btn_txt={props.cta_btn_txt} btn_url={props.cta_btn_url} btn_class={props.cta_btn_class}/>
        </div>
    );
};

export default cta;