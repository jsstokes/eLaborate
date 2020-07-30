import React from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../components/CodeBlock/code-block.component';

import { connect } from 'react-redux';

import './student-view.styles.css';

function PreviousButton(props) {
    return (
      <Button className='btn btn-secondary btn-spacing' onClick={props.onClick} disabled={props.disabled}>Previous</Button>
    );
  }
  
function CopyTextButton(props) {
  var step = props.step;
  console.log("Step in CopyTextButton Click():",step);
  if ((step.hasOwnProperty('copyText')) && ((step.copyText != null) && (step.copyText !== ""))) {
    return(
      <Button className='btn btn-success btn-spacing' onClick={() => {navigator.clipboard.writeText(step.copyText)}}>Copy Text</Button>
    );
  }
  else {
    return("");
  }
}

class StudentPage extends React.Component {
  constructor(props) {
      super();
      this.state = {
        // currentLab: props.currentLab,
        currentStep: 0,
        disableNextStep: false,
        disablePreviousStep: true,
        allowCopyText: true
      };
    }
  
    nextStep = () => {
      var nextStep = this.state.currentStep + 1;
      if ((nextStep + 1) >= this.props.currentLab.steps.length) {
        this.setState({disableNextStep: true});
      } 
      this.setState({currentStep: nextStep});
  
      if ( nextStep > 0) {
        this.setState({disablePreviousStep: false});
      } else {
        this.setState({disablePreviousStep: true});
      }
    }
  
    previousStep = () => {
      var previousStep = this.state.currentStep - 1;
      if ((previousStep + 1) >= this.props.currentLab.steps.length) {
        this.setState({disableNextStep: true});
      } else 
      this.setState({currentStep: previousStep});
      if ( previousStep > 0) {
        this.setState({disablePreviousStep: false});
      } else {
        this.setState({disablePreviousStep: true});
        this.setState({disableNextStep: false});
      }
    }
  
    previousButton() {
      return (
        <Button className='btn btn-secondary btn-spacing' onClick={this.previousStep} disabled={this.state.disablePreviousStep}>Previous</Button>
      );
    }
  
    checkResultsButton() {
      if (this.props.currentLab.steps[this.state.currentStep].hasOwnProperty("checkResults")) {
        return(
          <Button className='btn btn-primary btn-spacing' onClick={this.checkResults} >Check Results</Button>
        );
      }
    }
  
  
    checkResults = () => {
      this.setState({disableNextStep: false});
    }
  
    render() {
        console.log("StudentView->currentLab:", this.props.currentLab);
        if (this.props.currentLab == null) {
          return(
            <div className="container"><h1>Preview not available</h1><b>No Lab Selected</b></div>
          );
        }
      return (
        <div className="App">
        <h2>{ this.props.currentLab.steps[this.state.currentStep].title}</h2>
        <div className="junk">
        <ReactMarkdown 
        source={this.props.currentLab.steps[this.state.currentStep].markdown} 
        renderers={{ code: CodeBlock }}
        ></ReactMarkdown>
        </div>
        <PreviousButton onClick={this.previousStep} disabled={this.state.disablePreviousStep}></PreviousButton>
        <CopyTextButton step={this.props.currentLab.steps[this.state.currentStep]}></CopyTextButton>
        {this.checkResultsButton()}
        <Button className='btn btn-primary btn-spacing' onClick={this.nextStep} disabled={this.state.disableNextStep}>Next</Button>
          </div>
      );
    }
}

const mapStateToProps = state => ({
  currentLab: state.lab.currentLab
})

export default connect(mapStateToProps)(StudentPage);
