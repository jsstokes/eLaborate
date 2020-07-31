import React from 'react';


import { connect } from 'react-redux';
import './step.styles.css';

class Step  extends React.Component {

    constructor(params) {
        super();
    }

    render() {
        return(
            <div className="step">
                <b>Title</b>: {this.props.step.title}<hr/>
                <b>MarkDown</b>: <br/>
                <div className="markdown">{this.props.step.markdown}</div><br/>
                <b>Text to Copy</b>: {this.props.step.copyText}<br/>
                <b>Check Results</b>: {this.props.step.checkResults}
                <hr/>
                <button className="btn btn-info step-button">Preview</button>
                <button className="btn btn-primary step-button float-right">Edit</button>
            </div>
        );
    }
}
export default Step;