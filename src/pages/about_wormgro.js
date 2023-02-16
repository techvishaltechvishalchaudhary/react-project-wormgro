import React, { Component } from 'react';

import Hero from '../cmp/global/section/hero';
import BGBanner from '../assets/media/WormGro-about-banner.jpg';

import Content from '../cmp/template/About/content';
import FertilityCycle from '../assets/media/kick-start-your-soil-fertility-cycle.png';

import Quicklinks from '../cmp/global/section/quicklinks';
import imageBoxFirst from '../assets/media/wormgo-aboutbox-image.jpg';
import imageBoxSecond from '../assets/media/WormGro-img-box-2.jpg';
import imageBoxThird from '../assets/media/WormGro-img-box-3.jpg';

import Footer from '../cmp/global/section/footer';

class AboutWormGro extends Component {
    render() {
        return (
            <div id="about_wormgro" className="section mt-77">
                <Hero 
                    content={{
                        subtitle: 'ABOUT WormGro',
                        heading: 'Kick-start the natural soil fertility cycle.',
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
                        subtitle: 'WE’VE BEEN DOING THIS A WHILE',
                        heading: 'WormGro is a worm-cast liquid extract that has been developed and refined over 30 years by Australia’s leading vermiculture expert.',
                        paragraph: 'It contains over one million species of microorganisms, including bacteria, fungi, protozoa and yeasts. These micro-organisms kick-start the natural soil fertility cycle and boost the productivity of your crops, safely and sustainably.',
                        page_content: ({
                            bold_text: 'Proven benefits of using WormGro on your farm',
                            text: (<>
                                    <ol>
                                        <li><b>Increased yields.</b> WormGro increases yields by 10 percent on average and up to 50 percent.</li>
                                        <li><b>Carbon-rich soils that lower your emissions.</b> Reduce nitrogen runoff and leachate, whilst sequestering carbon dioxide and turning it into stable soil in the form of humus.</li>
                                        <li><b>Replaces expensive and destructive chemical fertilisers.</b> WormGro builds up biological resistance in plants against pests and disease. It’s better for the environment and human health than pesticides and chemical fertilisers. Continued application of these chemicals kills the beneficial microbes in soil and destroy its natural fertility. That means more chemicals are required over time to achieve the same results.</li>
                                        <li><b>Produce is more nutritious and chemical-free.</b> Food produced using WormGro is completely safe and chemical-free. It is also more nutritious with up to 80 chelated minerals.</li>
                                        <li><b>Reduces water use for irrigation.</b> WormGro improves soil structure, allowing it to hold more water, reducing drought and flood risk. Studies have shown the use of worm-related products can reduce the amount of water used for irrigation by up to 50%.</li>
                                        <li><b>Stronger stress-resistant crops.</b> WormGro frees bound phosphorous to make it bio-available to plants and crops. That means plants and crops with bigger root systems and stronger resistance to stress.</li>
                                        <li><b>Protection from disease.</b> WormGro has over one million species of microbes. These microbes help strengthen the plant’s immune system and fight disease</li>
                                        <li><b>Control weeds.</b> WormGro has specific weed colonising microbes.</li>
                                    </ol>
                                </>)
                        })
                    }}
                    content_right={{
                        image: {FertilityCycle}, // Mandatory Field //
                        heading: 'How it works',
                        paragraph: (<>The natural fertility cycle, or what Dr. Elaine Ingham calls “The Soil Food Web”, is a complex interaction of microbes, plants and soil minerals that work together to convert atmospheric nitrogen into stable organic nitrogen / ammonia in the soil, which plants then use as one of their main food sources.<br></br><br></br>Every batch of WormGro is analysed under a microscope to ensure it contains all the microbes needed to kickstart the fertility cycle. WormGro has the highest diversity of microorganisms of any product on the market. This diversity is key to ensuring it works in different soils, climates and for different plant varieties.<br></br><br></br>You don’t have to wait years and suffer reduced yields as it works either. You can increase your yields as your soil rebuilds. With WormGro you will use fewer inputs, less water and less fertiliser. It’s safer for you, your farm and the environment.</>)
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
                        heading: 'About Us',
                        paragraph: 'WormGro is a unique worm cast liquid extract that has been developed and refined over 30 years by Australia’s leading vermiculture expert, George Mingin',
                        button_text: 'Read More',
                        button_url: '/about-us',
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
                <Footer/>                    
            </div>
        );
    }
}

export default AboutWormGro;