import React, {Component} from 'react';
import Grey_sep from '../../../assets/media/seprater-grey-icon.png';
import Box_image from '../../../assets/media/WormGro-img-box-1.jpg';
import Button from '../../global/module/button';

class image_box extends Component {
    render(){
        return(
           <div className='image_box'>
                <img src={this.props.fetured_img ? this.props.fetured_img : Box_image} alt='Fetured Image' className='mb-10'/>
                <div className='image_box_content'>
                    <h4 className='h3_tag'>{this.props.title ? this.props.title : 'Lorem Ipsum'}</h4>
                    <img src={Grey_sep} className='seprater' alt="Grey Seprater"/>
                    <p className='p_tag'>{this.props.desc ? this.props.desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna varius natoque penatibus.'}</p>
                    <Button btn_txt={this.props.button_txt} btn_url={this.props.button_url} btn_class={this.props.button_class}/>
                </div>
           </div>
        );
    }
}

export default image_box;