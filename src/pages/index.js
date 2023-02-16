import React, { Component } from 'react';
import Slider from '../cmp/template//home/slider';

import Welcome from '../cmp/template/home/welcome';
import IconFirst from '../assets/media/WormGro-icon-1.png';
import IconSecond from '../assets/media/WormGro-icon-2.png';
import IconThird from '../assets/media/WormGro-icon-3.png';
import IconFourth from '../assets/media/WormGro-icon-4.png';
import IconFive from '../assets/media/WormGro-icon-5.png';
import IconSix from '../assets/media/WormGro-icon-6.png';

import Quicklinks from '../cmp/global/section/quicklinks';
import imageBoxFirst from '../assets/media/WormGro-img-box-1.jpg';
import imageBoxSecond from '../assets/media/WormGro-img-box-2.jpg';
import imageBoxThird from '../assets/media/WormGro-img-box-3.jpg';

import Testimonials from '../cmp/template/home/testimonials';
import Testimonial_BG from '../assets/media/WormGro-testimonials-background.jpg';

import Footer from '../cmp/global/section/footer';

class Home extends Component {
    render() {
        return (
            <div id="home" className="section">
                <Slider
                    sliderData={[
                        {
                            img : 'https://www.wormgro.com.au/wp-content/uploads/2022/11/Slide-1-new.jpg',
                            subtitle: 'NUTRITIOUS AND CHEMICAL-FREE',
                            title: 'Food produced using WormGro is more nutritious with up to 80 chelated minerals',
                            button_text: 'Read More',
                            button_url: '/about-wormgro/',
                            button_class: 'white_btn',
                            content_width: '50'
                        },
                        {
                            img : 'https://www.wormgro.com.au/wp-content/uploads/2022/10/slider-2new1.jpg',
                            subtitle: 'WormGro HAS BEEN TESTED IN SCIENTIFIC TRIALS',
                            title: 'Proven for over 20 years to increase yields, lower inputs and emissions while  boosting soil fertility and pest and disease resistance.',
                            button_text: 'Read More',
                            button_url: '/about-wormgro/',
                            button_class: 'white_btn',
                            content_width: '60'
                        },
                        {
                            img : 'https://www.wormgro.com.au/wp-content/uploads/2022/11/Slider-3-new.jpg',
                            subtitle: 'PROTECT YOUR LARGEST INVESTMENT',
                            title: 'Increase your farm’s resilience to climate change',
                            button_text: 'Read More',
                            button_url: '/about-wormgro/',
                            button_class: 'white_btn',
                            content_width: '50'
                        }
                    ]}
                />
                <Welcome 
                    content={{
                        subtitle:'WELCOME TO WormGro',
                        heading:'WormGro is a complete, biological organic fertiliser that contains over one million species and billions of microorganisms that are beneficial for soil health and plant growth.',
                        paragraph:(<>These micro-organisms kick-start the natural soil fertility process to boost the productivity of your crops, safely and sustainably. We call WormGro a second generation fertiliser.<br></br><br></br>WormGro greatly reduces the need for chemical fertilisers or pesticides, which harm the environment and our health, and is accredited as a certified organic input.</>)
                    }}
                    button={{
                        text:'Read More',
                        url:'/about-wormgro',
                        class:'green_btn'
                    }}
                    sidebar={{
                        subtitle:'WormGro WILL',
                        icon_img_first: {IconFirst},
                        icon_txt_first: 'Increase yields by up to 50 percent',
                        icon_img_second: {IconSecond},
                        icon_txt_second: 'Produce nutrient-dense, chemical-free crops',
                        icon_img_third: {IconThird},
                        icon_txt_third: 'Protect your crops from pests and disease',
                        icon_img_fourth: {IconFourth},
                        icon_txt_fourth: 'Reduce the amount of water you use for irrigation',
                        icon_img_five: {IconFive},
                        icon_txt_five: 'Lower your inputs and your costs',
                        icon_img_six: {IconSix},
                        icon_txt_six: 'Reduce your emissions and make your soils more resilient to climate change'                                                                                                                        
                    }}
                />
                <Quicklinks
                    content={{
                        subtitle: 'QUICKLINKS',
                        heading: 'With WormGro you will use fewer inputs, less water and less fertiliser. It’s safer for you, your farm and the environment.',
                        paragraph: 'Find out more here.'
                    }}
                    image_box_first={{
                        image: {imageBoxFirst},
                        heading: 'About WormGro',
                        paragraph: 'Living, healthy, nutrient-dense soil structure is everything in food and fibre production. Worms are nature’s best nitrogen recyclers that can improve your crop’s yield significantly.',
                        button_text: 'Read More',
                        button_url: '/about-wormgro',
                        button_class: 'green_btn'
                    }}
                    image_box_second={{
                        image: {imageBoxSecond},
                        heading: 'Profit & Planet',
                        paragraph: 'Synthetic, man-made fertiliser depletes your soil’s natural nutrients and the important microorganisms that live within it. Healthy plant growth from healthy soils means better profit and planet.',
                        button_text: 'Read More',
                        button_url: '/profit-and-planet',
                        button_class: 'green_btn'
                    }}
                    image_box_third={{
                        image: {imageBoxThird},
                        heading: 'See the Results',
                        paragraph: 'Large farming operations already use WormGro as a more natural and effective fertiliser to boost their production. Listen to their results here.',
                        button_text: 'Read More',
                        button_url: '/results',
                        button_class: 'green_btn'
                    }}
                />
                <Testimonials
                    subtitle='TESTIMONIALS'
                    quote='“We came across Kookaburra Worms entirely be chance - how grateful we are. We used the WormGro product on some of our commercial lucerne hay crops on a 16 acre black clay soil plot. The outcome of that was that prior to application it needed 4 waters and produced an average of 25 bales/acre with nil synthetic fertilisers. After application of 20L/ha WormGro, we needed only 2 waters and got an increase in yield up to 30 bales/acre.”'
                    name='Matt and Justine McLeod'
                    position='Goovigen, QLD'
                    background={{
                        bg_img: {Testimonial_BG}, // Mandatory Field //
                        bg_pos: 'bottom left',
                        bg_repeat: 'no-repeat',
                        bg_size: 'auto'
                    }}
                    mode='dark_mode'
                />
                <Footer/>
            </div>
        );
    }
}

export default Home;