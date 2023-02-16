import React, {useState, useEffect} from 'react';
import White_sep from '../../../assets/media/seprater-wht-icon.png';
import Button from '../../global/module/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Slider = (props) =>{    
    const [slide] = useState(props.sliderData);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = slide.length - 1
        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex){
            setIndex(0)
        }
    }, [index, slide])
    useEffect(() => {
        let autoslider = setInterval(() => {
          setIndex(index + 1)
         }, 5000);
          return () => clearInterval(autoslider)
    }, [index])
    return ( 
        <div id="hero_slider" className='rc_section'>
            <div className='slider_wrapper'>
                <div className='slider_items'>
                    {slide.map( (data, dataindex) => {
                        // console.log(data);
                        let slideClass = '';
                        if(dataindex === index){
                            slideClass = 'activeSlide';
                        }
                        if(dataindex === (index - 1) || (index === 0 && dataindex === slide.length - 1)){
                            slideClass = 'lastSlide';
                        }
                        if(dataindex === (index + 1) || (dataindex === 0 && index === slide.length - 1)){
                            slideClass = 'nextSlide';
                        }
                        return  <>
                            <div className={`slider_item ${slideClass}`} key={dataindex}>
                                <div className='slider_bg' style={{backgroundImage: `url(${data.img})`}}></div>
                                <div className='slider_content_wrapper'>
                                    <div className='slider_content' style={{maxWidth: `${data.content_width}%`}}>
                                        <div className='slider_title'>{data.subtitle}</div>
                                        <img className='seprater' src={White_sep} alt='Seprater'></img>
                                        <div className='slider_description'>{data.title}</div>
                                        <Button btn_txt={data.button_text} btn_url={data.button_url} btn_class={data.button_class}/>
                                    </div>
                                </div>
                            </div>  
                        </>             
                    })}
                </div>
            </div>
            <div className='slider_pagination'>
                <div className='prev' onClick={() => setIndex( index - 1 )}>
                    <FontAwesomeIcon icon={faChevronLeft} color='#3D7136'/>
                </div>
                <div className='next' onClick={() => setIndex( index + 1 )}>
                    <FontAwesomeIcon icon={faChevronRight} color='#3D7136'/>
                </div>
            </div>
        </div>
    );
}

export default Slider;