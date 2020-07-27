import React from "react";
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './components/CodeBlock/code-block.component';

import "./App.css";

function PreviousButton(props) {
  return (
    <Button className='btn btn-secondary btn-spacing' onClick={props.onClick} disabled={props.disabled}>Previous</Button>
  );
}

function CopyTextButton(props) {

  var step = props.step;
  if ((step.hasOwnProperty('copyText')) && ((step.copyText != null) && (step.copyText !== ""))) {
    return(
      <Button className='btn btn-success btn-spacing'>Copy Text</Button>
    );
  }
  else {
    return("");
  }
}


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lab: {
        steps:[
          {
            title: "Step 1",
            markdown: "### Step 1 - Insert a record\n" +
            "```\n" +
            "db.mycollection.insertOne({ name: 'fred'})\n" +
            "```\n",
            copyText: null //"db.mycollection.insertOne({ name: 'fred'})",
          },
          {
            title: "Step 2",
            markdown: "### Step 2 - Find a record\n" +
            "```\n" +
            "db.mycollection.findOne(\n" +
            "                          {\n" +
            "                            name: 'fred',\n" +
            "                            city: 'Bedrock'\n" +
            "                          }\n" +
            "                        );\n" +
            "```",
            copyText: "db.mycollection.findOne()"
          },
          {
            title: "Congratulations!!  You have completed this section.",
            markdown:"## Section Complete",
            copyText: null
          }
        ]
      },
      currentStep: 0,
      disableNextStep: false,
      disablePreviousStep: true,
      allowCopyText: true
    };
  }

  nextStep = () => {
    var nextStep = this.state.currentStep + 1;
    if ((nextStep + 1) >= this.state.lab.steps.length) {
      this.setState({disableNextStep: true});
    } 
    this.setState({currentStep: nextStep});

    if ( nextStep > 0) {
      this.setState({disablePreviousStep: false});
    } else {
      this.setState({disablePreviousStep: true});
    }
  }

  previoiusStep = () => {
    var previousStep = this.state.currentStep - 1;
    if ((previousStep + 1) >= this.state.lab.steps.length) {
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
      <Button className='btn btn-secondary btn-spacing' onClick={this.previoiusStep} disabled={this.state.disablePreviousStep}>Previous</Button>
    );
  }

  checkResultsButton() {
    if (this.state.lab.steps[this.state.currentStep].hasOwnProperty("checkResults")) {
      return(
        <Button className='btn btn-primary btn-spacing' onClick={this.checkResults} >Check Results</Button>
      );
    }
  }


  checkResults = () => {
    this.setState({disableNextStep: false});
  }

  render() {
    return (
      <div className="App">
      <h2>{this.state.lab.steps[this.state.currentStep].title}</h2>
      <div className="junk">
      <ReactMarkdown 
      source={this.state.lab.steps[this.state.currentStep].markdown} 
      renderers={{ code: CodeBlock }}
      ></ReactMarkdown>
      </div>
      <PreviousButton onClick={this.previoiusStep} disabled={this.state.disablePreviousStep}></PreviousButton>
      <CopyTextButton step={this.state.lab.steps[this.state.currentStep]}></CopyTextButton>
      {this.checkResultsButton()}
      <Button className='btn btn-primary btn-spacing' onClick={this.nextStep} disabled={this.state.disableNextStep}>Next</Button>
        </div>
    );
  }
}

export default App;
