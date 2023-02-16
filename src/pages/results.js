import React, { Component } from 'react';
import Hero from '../cmp/global/section/hero';
import BGBanner from '../assets/media/WormGro-results-bg-banner.jpg';

import Content from '../cmp/template/results/content';

import Quicklinks from '../cmp/global/section/quicklinks';
import imageBoxFirst from '../assets/media/wormgo-aboutbox-image.jpg';
import imageBoxSecond from '../assets/media/WormGro-img-box-2.jpg';
import imageBoxThird from '../assets/media/WormGro-result-image.jpg';

import Footer from '../cmp/global/section/footer';

class Results extends Component {
    render() {
        return (
            <div id="result" className='section mt-77'>
                <Hero 
                    content={{
                        subtitle: 'RESULTs',
                        heading: `Don't just take our word for it.`,
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
                        subtitle: 'TRIED & TESTED',
                        heading: 'WormGro has been tested in scientific trials and proven for over 20 years to increase yields, lower inputs and emissions while boosting soil fertility and pest and disease resistance.',
                        paragraph: (
                            <>
                            Check out the results for these owners from a scientific trial on capsicum crops from<br></br><br></br>
                            February 2021 until June 2021.
                            </>
                        )
                    }}
                    table= {{
                        thead: {
                            th_first: '',
                            th_second: 'Total yield',
                            th_three: 'Soil carbon',
                            th_four: 'CEC (cation exchange capability is a measure of soil fertility',
                            th_five: 'Leaf brix (a measure of resistance to disease and insects)',
                            th_six: 'Fruit brix (nutrient density)'
                        },
                        tbody: {
                            tr_first: {
                                td_first: 'Without WormGro',
                                td_second: '12.349 kg/ha',
                                td_three: '1.0 percent',
                                td_four: '5.8',
                                td_five: '8.4',
                                td_six: '8.1'
                            },
                            tr_second: {
                                td_first: 'With WormGro',
                                td_second: '15.675 kg.ha',
                                td_three: '1.1 percent',
                                td_four: '9.8',
                                td_five: '9.8',
                                td_six: '9.0'
                            },
                            tr_three: {
                                td_first: 'Difference',
                                td_second: '27 percent',
                                td_three: '10 percent',
                                td_four: '169 percent',
                                td_five: '17 percent4',
                                td_six: '11 percent'
                            }                                                        
                        }
                    }}
                    content_right={{
                        subtitle: 'WHAT OUR CLIENTS ARE SAYING',
                        testimonial_quote: '“We have used WormGro on some of our commercial lucerne hay crops on a 16-acre black clay soil plot… After the application of 20L/ha WormGro, we needed only two waters (previously it needed four) and saw a 25 percent increase in yield just 3 weeks later. Of relevance, the quality of the plants has also improved and they look considerably stronger and healthier. On just 16 acres in three weeks, that was a net difference (exc. farm overheads) of $6,054 with WormGro and $5,000 without or a 121 percent uplift after three weeks.”',
                        testimonial_name: 'Matt and Justine McLeod, Lucerne and cattle farmers, October 2021 – Goovigen, Queensland.'
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
                        heading: 'About WormGro',
                        paragraph: 'Living, healthy, nutrient-dense soil structure is everything in food and fibre production. Worms are nature’s best nitrogen recyclers that can improve your crop’s yield significantly.',
                        button_text: 'Read More',
                        button_url: '/about-wormgro',
                        button_class: 'green_btn'
                    }}
                />                
                <Footer/>
            </div>
        );
    }
}

export default Results;