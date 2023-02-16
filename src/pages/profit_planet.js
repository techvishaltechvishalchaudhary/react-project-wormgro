import React, { Component } from 'react';
import Hero from '../cmp/global/section/hero';
import BGBanner from '../assets/media/Wormgro-profit-planet-banner.jpg';

import Content from '../cmp/template/Profit-and-planet/content';

import Quicklinks from '../cmp/global/section/quicklinks';
import imageBoxFirst from '../assets/media/wormgo-aboutbox-image.jpg';
import imageBoxSecond from '../assets/media/WormGro-img-box-2.jpg';
import imageBoxThird from '../assets/media/WormGro-order-image.jpg';

import Footer from '../cmp/global/section/footer';

class ProfitAndPlanet extends Component {
    render() {
        return (
            <div id="profit_planet" className="section mt-77">
                <Hero 
                    content={{
                        subtitle: 'PROFIT AND PLANET',
                        heading: 'A Natural Approach.',
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
                        subtitle: 'LOOKING AFTER OUR ENVIRONMENT',
                        heading: 'WormGro is a nature-based organic fertiliser that protects our environment and human health.',
                        paragraph: 'WormGro is a nature-based organic fertiliser that protects our environment and human health. All while boosting your yields and your profits. Here’s how WormGro is better for you and the planet.',
                        page_content: ({
                            bold_text_first: 'WormGro helps store carbon in your soil and reduce greenhouse gas emissions',
                            text_first: 'Plants absorb carbon from the atmosphere during photosynthesis, around 30 percent of which goes into the soil. By regenerating the world’s soils we can trap more carbon in our soils and lower emissions. With WormGro we have seen up to 10 percent increase in soil carbon within one growing season.',
                            bold_text_second: 'Increase your farm’s resilience to climate change',
                            text_second: 'The frequency and intensity of flood and drought conditions we’re seeing is expected to increase. WormGro can help make your farm more resilient to climate change. It improves the soil structure so it has a high water holding capacity in periods of drought, and an increased ability to infiltrate water in times of extreme or extended rainfall.',
                            bold_text_third: 'Replaces chemical fertilisers, which harm our environment and human health',
                            text_third: 'The heavy use of agricultural chemicals, such as pesticides and fertilsers, to boost food productivity comes at a cost to our environment and human health. They also harm our pollinators (birds and insects), which are vital for our farms but unfortunately declining globally. Reducing the use of pesticides and seeking alternative forms of pest control can help protect our pollinators. https://www.fao.org/news/story/en/item/384726/icode/'
                        })
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

export default ProfitAndPlanet;