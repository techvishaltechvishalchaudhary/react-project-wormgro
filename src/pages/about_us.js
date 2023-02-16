import React, { Component } from 'react';
import Hero from '../cmp/global/section/hero';
import BGBanner from '../assets/media/WormGro-aboutus-bg-banner.jpg';

import Content from '../cmp/template/about-us/content';

import Quicklinks from '../cmp/global/section/quicklinks';
import imageBoxFirst from '../assets/media/WormGro-img-box-1.jpg';
import imageBoxSecond from '../assets/media/WormGro-img-box-2.jpg';
import imageBoxThird from '../assets/media/WormGro-order-image.jpg';

import Footer from '../cmp/global/section/footer';

class AboutUS extends Component {
    render() {
        return (
            <div id="about_us" className="section mt-77">
                <Hero 
                    content={{
                        subtitle: 'ABOUT US',
                        heading: 'We Know worms inside out.',
                    }}
                    background={{
                        bg_img: {BGBanner}, // Mandatory Field //
                        bg_pos: 'center center',
                        bg_repeat: 'no-repeat',
                        bg_size: 'cover'
                    }}
                />
                <Content
                    content_left={{
                        subtitle: 'PASSION & EXPERIENCE',
                        heading: 'WormGro is a unique worm cast liquid extract that has been developed and refined over 30 years by Australia’s leading vermiculture expert, George Mingin.',
                        paragraph: (
                                    <>
                                    George is passionate about growing abundant, healthy nutrient dense food and helping farmers to get the highest yields using practices that work with nature. He specialises in understanding what happens below the ground with fungi, bacteria, archaea, protozoa, nematodes and of course earthworms and how they all interact to create the natural soil fertility cycle to boost soil health and plant growth. His help has been sought by farmers with problems such as pasture dieback on cattle properties, to macadamia orchardists right through to large scale horticulturists.<br></br><br></br>
                                    George’s fascination with vermiculture started back in 1991 when he started working with worms to recycle organic waste. Clients included Heinz Foods, Australian Paper Mills, Hobart City Council, Melbourne City Council, Queen Victoria Markets and Herds Abattoir.<br></br>
                                    Around 15 years ago George and his family then established Kookaburra Worm Farms, one of the largest worm farming operations in Australia.<br></br>
                                    Matt, George’ son, joined George in the family business in 2015. As a qualified health practitioner specialising in biology, health and nutrition, Matt is now focused on improving the health of our farmlands and soils, which directly impact human and environmental health.<br></br>
                                    Over the years, both George and Matt have observed, tested and proven the massive benefits that worms and worm products can bring to agricultural and horticultural soils and follow on benefits to the plants grown in these regenerative soils.<br></br>
                                    </>
                                ),
                    }}
                    content_right={{
                        cta_heading: 'These observations are now well backed up by a plethora of scientific studies showing the efficacy of worms and worm-related products in both improving soils and improving plant yields and plant health.',
                        cta_button_text: 'FIND OUT MORE',
                        cta_button_url: '/contact-order',
                        cta_button_class: 'green_btn'
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
                        heading: 'Order WormGro Today',
                        paragraph: 'If you want to get the benefits of higher yields, lower inputs and more resilient crops contact us today.',
                        button_text: 'Read More',
                        button_url: '/contact-order',
                        button_class: 'green_btn'
                    }}
                />
                <Footer/>
            </div>
        );
    }
}

export default AboutUS;