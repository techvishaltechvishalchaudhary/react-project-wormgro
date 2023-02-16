import React, { Component } from 'react';
import Grey_sep from '../../../assets/media/seprater-grey-icon.png';

class title extends Component {
    render() {
        return(
            <div className='title_with_text'>
                <h6 className='h6_tag'>{this.props.sub ? this.props.sub : 'SUBTITLE GOES HERE'}</h6>
                <img src={Grey_sep} className='seprater' alt='WormGro Green Seprater'></img>
                <h2 className='h2_tag'>{this.props.title ? this.props.title : 'Section Title Goes Here'}</h2>
                <p className='p_tag'>{this.props.desc ? this.props.desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna varius natoque penatibus.'}</p>
            </div>
        );
    }
}

export default title;