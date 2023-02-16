import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const ThankYou = (props) => {

    const [formvalue, setCform] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        farm_size: '',
        message: ''
    });

    useEffect(() => {
        let data = localStorage.getItem('formObject');
        let formstoredata = ('data: ', JSON.parse(data));
        // console.log(formstoredata);
        setCform({
            name: formstoredata.name,
            email: formstoredata.email,
            phone: formstoredata.phone,
            address: formstoredata.address,
            farm_size: formstoredata.farm_size,
            message: formstoredata.message
        });
    }, []);

    return(
        <div id="thank_you" className="rc_section p-70 mt-77">
            <div className="rc_row f-align-center">
                <div className='message_box col-100 p-30 text-center'>
                    <h2 className='h2_tag'>Thank You for Submitting</h2>
                    <table className='col-100 text-left mb-20'>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{formvalue.name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{formvalue.email}</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td>{formvalue.phone}</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>{formvalue.address}</td>
                            </tr>
                            <tr>
                                <td>Farm Size (Hectares)</td>
                                <td>{formvalue.farm_size}</td>
                            </tr>
                            <tr>
                                <td>Message</td>
                                <td>{formvalue.message}</td>
                            </tr>
                        </tbody>
                    </table>
                    <NavLink to="/contact-order" className='green_btn'>Back To Contact Page</NavLink>
                </div>
            </div>
        </div>
    );
}

export default ThankYou;