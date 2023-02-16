import React from 'react';
import { useNavigate } from "react-router-dom";

const ContactForm = (props) => {

    const navigate = useNavigate();
    const setlocalstorage = (event) => {
        var data = new FormData(event.target);
        let formObject = Object.fromEntries(data.entries());
        localStorage.setItem('formObject', JSON.stringify(formObject));        
    }

    const formSubmit = (e) => {
        e.preventDefault();
        var formserialdata = new FormData(e.target);
        let formvalue = Object.fromEntries(formserialdata.entries());
        // console.log(formvalue);
        if( formvalue.name === '' || formvalue.email === '' || formvalue.phone === '' || formvalue.address === '' || formvalue.farm_size === '' || formvalue.message === '' ) {
           alert('All Fields are Required');
           return;
        }
        localStorage.clear();
        setlocalstorage(e);
        return navigate('/thank-you');
    }

    return(
        <div className='contact_form_wrapper'>
            <form id="contact_form" onSubmit={formSubmit}>
                <input type='text' name='name' placeholder={props.name_placeholder}/>
                <input type='email' name='email' placeholder={props.email_placeholder} />
                <input type='tel' name='phone' placeholder={props.phone_placeholder} />
                <input type='text' name='address' placeholder={props.address_placeholder} />
                <input type='text' name='farm_size' placeholder={props.farmsize_placeholder} />
                <textarea name='message' placeholder={props.message_placeholder} rows='4'/>
                <button type='submit' className={props.btn_class}>{props.btn_txt}</button>
            </form>
        </div>
    );
}

export default ContactForm;