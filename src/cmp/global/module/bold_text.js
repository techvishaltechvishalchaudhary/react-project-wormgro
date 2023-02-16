import React, { Component } from 'react';

class bold_text extends Component {
    render() {
        return (
            <div className='bold_content mt-20'>
                <p className='p_tag fontSize18 fontweight600'>{this.props.bold_txt ? this.props.bold_txt : 'Bold Paragraph Goes Here'}</p>
                <p className='p_tag'>{this.props.desc ? this.props.desc : 'Paragraph lorem text goes here.'}</p>
            </div>
        );
    }
}

export default bold_text;