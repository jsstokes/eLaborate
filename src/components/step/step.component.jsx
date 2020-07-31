import React from 'react';
import Popup from 'reactjs-popup';

import { connect } from 'react-redux';
import './step.styles.css';

function EditStep() {
    return (
        <Popup trigger={<button>Edit</button>} position="right center">
            <div>content Popup here</div>
        </Popup>
    );
}


class Step  extends React.Component {

    constructor(params) {
        super();
    }

    render() {
        return(
            <div className="step">
                <b>Title</b>: {this.props.step.title}<hr/>
                <b>MarkDown</b>: <br/>
                <div><textarea class="markdown" type="textarea" value={this.props.step.markdown}></textarea><br/></div>
                {/* <div className="markdown">{this.props.step.markdown}</div><br/> */}
                <hr></hr>
                <b>Text to Copy</b>: {this.props.step.copyText}<br/>
                <b>Check Results</b>: {this.props.step.checkResults}
                <hr/>
                <button className="btn btn-info step-button">Preview</button>
                <EditStep></EditStep>
            </div>
        );
    }
}
export default Step;