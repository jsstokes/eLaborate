import React from "react";
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './pages/components/CodeBlock/code-block.component';

import "./App.css";

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
            copyText: "db.mycollection.insertOne({ name: 'fred'})",
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
    console.log("Going to Next Step from:", this.state.currentStep);
    var nextStep = this.state.currentStep + 1;
    if ((nextStep + 1) >= this.state.lab.steps.length) {
      this.setState({disableNextStep: true});
    } else {
      console.log('Allowing nextStep of:', nextStep);
      console.log('Length of steps:', this.state.lab.steps.length);
    }
    this.setState({currentStep: nextStep});

    if ( nextStep > 0) {
      this.setState({disablePreviousStep: false});
      console.log("Allow Previous Step");
    } else {
      console.log("Disable Previous Step");
      this.setState({disablePreviousStep: true});
    }
  }

  previoiusStep = () => {
    var nextStep = this.state.currentStep - 1;
    if ((nextStep + 1) >= this.state.lab.steps.length) {
      this.setState({disableNextStep: true});
    } else {
      console.log('Allowing nextStep of:', nextStep);
      console.log('Length of steps:', this.state.lab.steps.length);
    }
    this.setState({currentStep: nextStep});
    if ( nextStep > 0) {
      this.setState({disablePreviousStep: false});
      console.log("Allow Previous Step");
    } else {
      console.log("Disable Previous Step");
      this.setState({disablePreviousStep: true});
    }
  }

  checkResultsButton() {
    if (this.state.lab.steps[this.state.currentStep].hasOwnProperty("checkResults")) {
      console.log("step has check Results");
      return(
        <Button className='btn btn-primary btn-spacing' onClick={this.checkResults} >Check Results</Button>
      );
    } else {
      console.log("step has NO check Results");
      return;
    }
  }


  checkResults = () => {
    this.setState({disableNextStep: false});
  }

  render() {
    return (
      <div className="App">
      <h2>{this.state.lab.steps[this.state.currentStep].title}</h2>
        <ReactMarkdown 
          source={this.state.lab.steps[this.state.currentStep].markdown} 
          renderers={{ code: CodeBlock }}
        ></ReactMarkdown>
        <Button className='btn btn-secondary btn-spacing' onClick={this.previoiusStep} disabled={this.state.disablePreviousStep}>Previous</Button>
        <Button className='btn btn-success btn-spacing'>Copy Text</Button>
        {this.checkResultsButton()}
        <Button className='btn btn-primary btn-spacing' onClick={this.nextStep} disabled={this.state.disableNextStep}>Next</Button>
        </div>
    );
  }
}

export default App;
