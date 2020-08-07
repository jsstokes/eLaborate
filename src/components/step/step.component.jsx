import React from 'react';
import './step.styles.css';

class Step  extends React.Component {

    constructor(params) {
        super();
        this.state = {
            step: {
                title: params.step.title,
                markdown: params.step.markdown,
                copyText: params.step.copyText,
                stepKey: params.step.stepKey,
            },
            hasChanged: false,
            original: params.step
        };
    }

    handleChange = (e) => {
        var newStep = { ...this.state.step};
        newStep[e.target.name]= e.target.value;
        this.setState({
            step: newStep,
            hasChanged: true
        });
        return true;
    } 

    onSaveChanges = (event) => {
        this.setState({hasChanged: false});
        this.props.onChange(this.state.step);
    }

    onShowState = () => {
        console.log(this.state);
    }

    render() {
        return(
            <div className="step">
                <label>Title</label> <input name='title' type='text' value={this.state.step.title} onChange={this.handleChange}/><hr/>
                <b>MarkDown</b>: <br/>
                <div><textarea name="markdown" className="markdown" type="textarea" value={this.state.step.copyText} onChange={this.handleChange}></textarea><br/></div>
                {/* <div><textarea name="markdown" className="markdown" type="textarea" value={this.state.step.markdown} onChange={this.handleChange}></textarea><br/></div> */}
                <hr></hr>
                <b>Text to Copy</b><input type="text" name="copyText" value={this.state.step.copyText} onChange={this.handleChange} size='120' /><br/>
                <hr/>
                <button className="btn btn-info step-button" onClick={this.onSaveChanges} disabled={!this.state.hasChanged}>Save</button>
                <button className="btn btn-info step-button" onClick={this.onShowState} >Show State</button>
            </div>
        );
    }
}
export default Step;