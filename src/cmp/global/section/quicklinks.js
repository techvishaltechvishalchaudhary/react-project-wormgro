import React, { Component } from 'react';
import Title from '../module/title_subtitle';
import ImageBox from '../module/image_box';

class quicklinks extends Component {
    render() {
        return (
            <div id="quicklinks" className='rc_section grey_bg p-70'>
                <div className='rc_row'>
                    <div className='col-70'>
                        <Title sub={this.props.content.subtitle} title={this.props.content.heading} desc={this.props.content.paragraph}/>
                    </div>
                </div>
                <div className='rc_row mt-20 gp-0'>
                    <div className='col-33'><ImageBox fetured_img={this.props.image_box_first.image.imageBoxFirst} title={this.props.image_box_first.heading} desc={this.props.image_box_first.paragraph} button_txt={this.props.image_box_first.button_text} button_url={this.props.image_box_first.button_url} button_class={this.props.image_box_first.button_class}/></div>
                    <div className='col-33'><ImageBox fetured_img={this.props.image_box_second.image.imageBoxSecond} title={this.props.image_box_second.heading} desc={this.props.image_box_second.paragraph} button_txt={this.props.image_box_second.button_text} button_url={this.props.image_box_second.button_url} button_class={this.props.image_box_second.button_class}/></div>
                    <div className='col-33'><ImageBox fetured_img={this.props.image_box_third.image.imageBoxThird} title={this.props.image_box_third.heading} desc={this.props.image_box_third.paragraph} button_txt={this.props.image_box_third.button_text} button_url={this.props.image_box_third.button_url} button_class={this.props.image_box_third.button_class}/></div>
                </div>
            </div>
        );
    }
}

export default quicklinks;