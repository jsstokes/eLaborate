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
        console.log("Step Component params:", params);
        this.state = {
            title: params.step.title,
            markdown: params.step.markdown,
            copyText: params.step.copyText,
            hasChanged: false
        };
        console.log("Step Component initial state:", this.state);
    }

    handleChange = (e) => {
        console.log("handleChange - target:", e.target);
        console.log("handleChange - name:", e.target.name);
        console.log("handleChange -value:", e.target.value);
        var newState = {
            [e.target.name]: e.target.value,
            hasChanged: true
        };
        this.setState(newState);
        console.log("New State:", newState);
        return true;
    } 

    onSaveChanges = () => {
        console.log(this.state);
        this.setState({hasChanged: false});
    }

    render() {
        return(
            <div className="step">
                <label>Title</label> <input name='title' type='text' value={this.state.title} onChange={this.handleChange}/><hr/>
                <b>MarkDown</b>: <br/>
                <div><textarea name="markdown" className="markdown" type="textarea" value={this.state.markdown} onChange={this.handleChange}></textarea><br/></div>
                <hr></hr>
                <b>Text to Copy</b><input type="text" name="copyText" value={this.state.copyText} onChange={this.handleChange} size='120' /><br/>
                <hr/>
                <button className="btn btn-info step-button" onClick={this.onSaveChanges} onChange={this.handleChange} disabled={!this.state.hasChanged}>Save</button>
            </div>
        );
    }
}
export default Step;