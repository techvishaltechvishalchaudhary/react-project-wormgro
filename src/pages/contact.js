import React, { Component } from 'react';
import Hero from '../cmp/global/section/hero';
import BGBanner from '../assets/media/Wormgro-contact-bg-banner.jpg';

import Content from '../cmp/template/contact/content';

import Quicklinks from '../cmp/global/section/quicklinks';
import imageBoxFirst from '../assets/media/wormgo-aboutbox-image.jpg';
import imageBoxSecond from '../assets/media/WormGro-img-box-2.jpg';
import imageBoxThird from '../assets/media/WormGro-img-box-3.jpg';

import Footer from '../cmp/global/section/footer';

class Contact extends Component {
    render() {
        return (
            <div id="contact" className="section mt-77">
                <Hero 
                    content={{
                        subtitle: 'CONTACT & ORDER',
                        heading: `You won't regret it.`,
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
                            bold_text: 'Using WormGro on your farm',
                            text: (<>
                                    WormGro comes in a dark, liquid form. It has a strong ammonia smell, which comes from the naturally occurring nitrogen-fixing microbes that have been specially selected to deliver soil fertility and boost the health and productivity of your plants and crops.<br></br><br></br>
                                    WormGro should be diluted with water to apply the equivalent of 10-20 litres per hectare, as recommended. Use a low-pressure, high-flow nozzle wherever possible to apply the product, as high pressure can sometimes damage the diversity of microbes in WormGro.<br></br><br></br>
                                    Ideally, you want to apply it later in the day, after the strongest sunlight has passed and preferably just before rain or irrigation.<br></br><br></br>
                                    WormGro needs to be checked for compatibility with other nitrogen-based fertilisers or herbicides, including glyphosate or pesticides.<br></br><br></br>
                                    As with all biologicals, do not inhale or drink WormGro. Wash hands and equipment after use.
                                </>
                            ),
                        })
                    }}
                    content_right={{
                        subtitle: 'ENQUIRE',
                        form_placeholder: ({
                             name: 'Name',
                             email: 'Email',
                             phone: 'Phone',
                             address: 'Address',
                             farm_size: 'Farm Size (Hectares)',
                             message: 'Message'
                        }),
                        form_button: ({
                            button_txt: 'Submit',
                            button_class: 'green_btn'
                        })
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
                        paragraph: 'Living, healthy, nutrient-dense soil structure is everything in food and fibre production. Worms are nature’s best nitrogen recyclers that can improve your crop’s yield significantly.',
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

export default Contact;