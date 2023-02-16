import React, { useState, useEffect } from 'react';

const Traffic = () => {

    const[n_red, setN_red] = useState('');
    const[n_orange, setN_orange] = useState('');
    const[n_green, setN_green] = useState('');
    const[n_rgreen, setN_rgreen] = useState('');
    const[s_red, setS_red] = useState('');
    const[s_orange, setS_orange] = useState('');
    const[s_green, setS_green] = useState('');
    const[s_rgreen, setS_rgreen] = useState('');

    const[e_red, setE_red] = useState('');
    const[e_orange, setE_orange] = useState('');
    const[e_green, setE_green] = useState('');
    const[e_rgreen, setE_rgreen] = useState('');
    const[w_red, setW_red] = useState('');
    const[w_orange, setW_orange] = useState('');
    const[w_green, setW_green] = useState('');
    const[w_rgreen, setW_rgreen] = useState('');

    const north_south_pole = () => {
        setN_red(true);
        setN_orange(false);
        setN_green(false);
        setN_rgreen(false);
        setS_red(false);
        setS_orange(false);
        setS_green(true);
        setS_rgreen(true);
        setTimeout(() => {
            setS_orange(true);
        }, 17000);
        setTimeout(() => {
            setN_red(false);
            setN_green(true);       
            setS_orange(false);
            setS_rgreen(false);
        }, 20000);
        setTimeout(() => {
            setN_orange(true);
            setS_orange(true);
            setS_green(false);
            setS_rgreen(false);
        }, 37000);
        setTimeout(() => {
            setN_orange(false);
            setN_rgreen(true);
            setS_red(true);
            setS_orange(false);
        }, 40000);
        setTimeout(() => {
            setN_orange(true);
            setN_green(false);
            setN_rgreen(false);            
        }, 57000);
        setTimeout(() => {
            setN_red(true);
            setN_orange(false);
        }, 60000);
    }

    const east_west_pole = () => {
        setE_red(true);
        setE_orange(false);
        setE_green(false);
        setE_rgreen(false);
        setW_red(true);
        setW_orange(false);
        setW_green(false);
        setW_rgreen(false);
        setTimeout(() => {
            setW_red(false);
            setW_green(true);
            setW_rgreen(true);
        }, 60000);
        setTimeout(() => {
            setW_orange(true);
        }, 77000);
        setTimeout(() => {
            setE_red(false);
            setE_green(true);
            setW_orange(false);
            setW_rgreen(false);
        }, 80000);
        setTimeout(() => {
            setE_orange(true);
            setW_orange(true);
            setW_green(false);
        }, 97000);
        setTimeout(() => {
            setE_orange(false);
            setE_rgreen(true);
            setW_red(true);
            setW_orange(false);
        }, 100000);
        setTimeout(() => {
            setE_orange(true);
            setE_green(false);
            setE_rgreen(false);
        }, 117000);  
        setTimeout(() => {
            setE_red(true);
            setE_orange(false);
        }, 120000);
    }

    useEffect(() => {
        north_south_pole();
        east_west_pole();
        const north = setInterval(() => {
            north_south_pole();
            east_west_pole();
        }, 120000);
        return () => clearInterval(north);
    }, []);
    
    return(
        <>
        <div className='tl_container align-center mt-77'>
            <h1 className='align-center'>Traffic Light</h1>
            <div className='boundary'>
                <div className='north_side'>
                    <div className='flex'>
                        <div className='road'>&uarr;</div>
                        <div className='light_pole bottom flex_end'>
                            <div className='horizontal'>
                                <div className={`red ${n_red}`}></div>
                                <div className={`orange ${n_orange}`} ></div>
                                <div className={`green ${n_green}`} >&uarr;</div>
                            </div>
                            <div className={`n_right_green green ${n_rgreen}`} >&rarr;</div>
                        </div>
                        <div className='road bottom_border'>&darr;</div>
                    </div>
                </div>
                <div className='center_div'>
                    <div className='east_side'>                        
                        <div className='road_v'>&rarr;</div>
                        <div className='light_pole flex_direction_col flex_end'>
                            <div className={`e_right_green green ${e_rgreen}`}>&uarr;</div>
                            <div className='vertical right'>
                                <div className={`red ${e_red}`}></div>
                                <div className={`orange ${e_orange}`}></div>
                                <div className={`green ${e_green}`}>&larr;</div>
                            </div>
                        </div>
                        <div className='road_v right_border'>&larr;</div>
                    </div>
                    <div className='chonk'></div>
                    <div className='west_side'>
                        <div className='road_v'>&rarr;</div>
                        <div className='light_pole flex_direction_col'>
                            <div className='vertical v_reverse'>
                                <div className={`red ${w_red}`}></div>
                                <div className={`orange ${w_orange}`}></div>
                                <div className={`green ${w_green}`}>&rarr;</div>
                            </div>
                            <div className={`w_right_green green ${w_rgreen}`}>&darr;</div>                            
                        </div>
                        <div className='road_v left_border'>&larr;</div>
                    </div>
                </div>
                <div className='south_side'>
                    <div className='flex'>
                        <div className='road'>&uarr;</div>
                        <div className='light_pole top flex_start'>
                            <div className={`s_right_green green ${s_rgreen}`} >&larr;</div>
                            <div className='horizontal h_reverse'>
                                <div className={`red ${s_red}`}></div>
                                <div className={`orange ${s_orange}`}></div>
                                <div className={`green ${s_green}`}>&darr;</div>
                            </div> 
                        </div>
                        <div className='road top_border'>&darr;</div>  
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Traffic;