import React from 'react';

const result_Table = (props) => {
    return(
        <div className='result_table text-left mt-30'>
            <table>
                <thead>
                    <tr>
                        <th>{props.thead_th1}</th>
                        <th>{props.thead_th2}</th>
                        <th>{props.thead_th3}</th>
                        <th>{props.thead_th4}</th>
                        <th>{props.thead_th5}</th>
                        <th>{props.thead_th6}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>{props.tbody_tr1_td1}</b></td>
                        <td>{props.tbody_tr1_td2}</td>
                        <td>{props.tbody_tr1_td3}</td>
                        <td>{props.tbody_tr1_td4}</td>
                        <td>{props.tbody_tr1_td5}</td>
                        <td>{props.tbody_tr1_td6}</td>
                    </tr>
                    <tr>
                        <td><b>{props.tbody_tr2_td1}</b></td>
                        <td>{props.tbody_tr2_td2}</td>
                        <td>{props.tbody_tr2_td3}</td>
                        <td>{props.tbody_tr2_td4}</td>
                        <td>{props.tbody_tr2_td5}</td>
                        <td>{props.tbody_tr2_td6}</td>
                    </tr>
                    <tr>
                        <td><b>{props.tbody_tr3_td1}</b></td>
                        <td>{props.tbody_tr3_td2}</td>
                        <td>{props.tbody_tr3_td3}</td>
                        <td>{props.tbody_tr3_td4}</td>
                        <td>{props.tbody_tr3_td5}</td>
                        <td>{props.tbody_tr3_td6}</td>
                    </tr>                                                            
                </tbody>
            </table>
        </div>
    );
}

export default result_Table;