import React from 'react';
import Title from '../../global/module/title_subtitle';
import Grey_sep from '../../../assets/media/seprater-grey-icon.png';
import ResultTable from '../../global/module/table_result';

const content= (props) => {
   return(
        <div id="content_info" className='rc_section p-70'>
            <div className='rc_row'>
                <div className='col-65 pr-30'>
                    <Title sub={props.content_left.subtitle} title={props.content_left.heading} desc={props.content_left.paragraph}/>
                    <ResultTable 
                        thead_th1={props.table.thead.th_first}
                        thead_th2={props.table.thead.th_second}
                        thead_th3={props.table.thead.th_three}
                        thead_th4={props.table.thead.th_four}
                        thead_th5={props.table.thead.th_five}
                        thead_th6={props.table.thead.th_six}
                        tbody_tr1_td1={props.table.tbody.tr_first.td_first}
                        tbody_tr1_td2={props.table.tbody.tr_first.td_second}
                        tbody_tr1_td3={props.table.tbody.tr_first.td_three}
                        tbody_tr1_td4={props.table.tbody.tr_first.td_four}
                        tbody_tr1_td5={props.table.tbody.tr_first.td_five}
                        tbody_tr1_td6={props.table.tbody.tr_first.td_six}
                        tbody_tr2_td1={props.table.tbody.tr_second.td_first}
                        tbody_tr2_td2={props.table.tbody.tr_second.td_second}
                        tbody_tr2_td3={props.table.tbody.tr_second.td_three}
                        tbody_tr2_td4={props.table.tbody.tr_second.td_four}
                        tbody_tr2_td5={props.table.tbody.tr_second.td_five}
                        tbody_tr2_td6={props.table.tbody.tr_second.td_six}
                        tbody_tr3_td1={props.table.tbody.tr_three.td_first}
                        tbody_tr3_td2={props.table.tbody.tr_three.td_second}
                        tbody_tr3_td3={props.table.tbody.tr_three.td_three}
                        tbody_tr3_td4={props.table.tbody.tr_three.td_four}
                        tbody_tr3_td5={props.table.tbody.tr_three.td_five}
                        tbody_tr3_td6={props.table.tbody.tr_three.td_six}
                    />
                </div>
                <div className='col-35 pr-30 testimonials-simple'>
                    <h6 className='h6_tag'>{props.content_right.subtitle ? props.content_right.subtitle : 'SUBTITLE GOES HERE'}</h6>
                    <img src={Grey_sep} className='seprater' alt='WormGro Green Seprater'></img>
                    <p className='p_tag testimonial_quote'>{props.content_right.testimonial_quote ? props.content_right.testimonial_quote : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna varius natoque penatibus.'}</p>
                    <span className='p_tag testimonial_name fontSize12 fontweight500 color-green'>{props.content_right.testimonial_name ? props.content_right.testimonial_name : 'Name'}</span>
                </div>
            </div>
        </div>
   );
}

export default content;