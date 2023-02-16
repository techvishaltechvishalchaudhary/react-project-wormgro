import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class button extends Component {
    render() {
        return (
            <Link to={this.props.btn_url ? this.props.btn_url : '/'}><button className={this.props.btn_class ? this.props.btn_class : 'green_btn'}>{this.props.btn_txt ? this.props.btn_txt : 'Read More'}</button></Link>
        );
    }
}

export default button;