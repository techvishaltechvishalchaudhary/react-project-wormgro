import React, { Component } from 'react';
import Grey_sep from '../../../assets/media/seprater-grey-icon.png';
import Title from '../../global/module/title_subtitle';
import Button from '../../global/module/button';
import IconText from '../../global/module/icon_text';

class Welcome extends Component {
    render(){
        return (
            <div id="welcome" className='rc_section p-70'>
                <div className='rc_row f_dir_row'>
                    <div className='col-65 pr-70'>
                        <div className='content'>
                            <Title sub={this.props.content.subtitle} title={this.props.content.heading} desc={this.props.content.paragraph}/>
                            <Button btn_txt={this.props.button.text} btn_url={this.props.button.url} btn_class={this.props.button.class}/>
                        </div>
                    </div>
                    <div className='col-35'>
                        <div className='sidebar '>
                            <h6 className='h6_tag'>{this.props.sidebar.subtitle}</h6>
                            <img className='seprater' src={Grey_sep} alt='Seprater'></img>
                            <div className='icon_list'>
                                <IconText icon_img={this.props.sidebar.icon_img_first.IconFirst} icon_txt={this.props.sidebar.icon_txt_first}/>
                                <IconText icon_img={this.props.sidebar.icon_img_second.IconSecond} icon_txt={this.props.sidebar.icon_txt_second}/>
                                <IconText icon_img={this.props.sidebar.icon_img_third.IconThird} icon_txt={this.props.sidebar.icon_txt_third}/>
                                <IconText icon_img={this.props.sidebar.icon_img_fourth.IconFourth} icon_txt={this.props.sidebar.icon_txt_fourth}/>
                                <IconText icon_img={this.props.sidebar.icon_img_five.IconFive} icon_txt={this.props.sidebar.icon_txt_five}/>
                                <IconText icon_img={this.props.sidebar.icon_img_six.IconSix} icon_txt={this.props.sidebar.icon_txt_six}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;