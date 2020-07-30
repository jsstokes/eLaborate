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
  
    gotoNextStep = () => {
      //
      // Setup some needed variables to make the code more readable
      //
      var currentStep = this.state.currentStep;
      var nextStep = currentStep + 1;
      // var lastStep = this.state.currentLab.steps.length;
      var willBeOnLastStep = ( nextStep + 1 ) >= this.props.currentLab.steps.length;
      var willBeOnFirstStep = nextStep === 0;

      if (willBeOnLastStep) {
        this.setState({disableNextStep: true}); // No more steps, disable the button
      } else {
        this.setState({disableNextStep: false});  // More steps left, enable the button
      }
  
      if ( willBeOnFirstStep ) {
        this.setState({disablePreviousStep: true});  // Enable the button
      } else {
        this.setState({disablePreviousStep: false});   // Disable the button
      }

      this.setState({currentStep: nextStep});   // Point to the next step

    }
  
    gotoPreviousStep = () => {
      //
      // Setup some needed variables to make the code more readable
      //
      var currentStep = this.state.currentStep;
      var nextStep = currentStep + 1;
      var areOnLastStep = (nextStep + 1) > this.props.currentLab.steps.length;

      var previousStep = this.state.currentStep - 1;

      // See if there are more steps and adjust the NEXT button
      if (areOnLastStep) {
        console.log("gotoPreviousStep: On Last Step");
        this.setState({disableNextStep: true});     // No more steps, disable the button
      } else {
        console.log("gotoPreviousStep: more Steps left");
        this.setState({disableNextStep: false});    // More steps left, enable the button
      }
      
      // See if there are previous steps and adjust the button
      if ( previousStep > 0) {
        console.log("gotoPreviousStep: there are previous steps");
        this.setState({disablePreviousStep: false});  // Not on the first step, enable the button
        this.setState({currentStep: previousStep});   // set to the previous step
      } else {
        console.log("gotoPreviousStep: At the beginning/first");
        this.setState({disablePreviousStep: true});   // On the FIRST step, so disable the button
        this.setState({currentStep: previousStep});
      }


    }
  
    previousButton() {
      return (
        <Button className='btn btn-secondary btn-spacing' onClick={this.gotoPreviousStep} disabled={this.state.disablePreviousStep}>Previous</Button>
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
        <PreviousButton onClick={this.gotoPreviousStep} disabled={this.state.disablePreviousStep}></PreviousButton>
        <CopyTextButton step={this.props.currentLab.steps[this.state.currentStep]}></CopyTextButton>
        {this.checkResultsButton()}
        <Button className='btn btn-primary btn-spacing' onClick={this.gotoNextStep} disabled={this.state.disableNextStep}>Next</Button>
          </div>
      );
    }
}

const mapStateToProps = state => ({
  currentLab: state.lab.currentLab
})

export default connect(mapStateToProps)(StudentPage);
