import React from "react";
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
            copyText: "db.mycollection.insertOne({ name: 'fred'})"
          },
          {
            title: "Step 2",
            markdown: "### Step 2 - Find a record\n" +
            "```\n" +
            "db.mycollection.findOne()\n" +
            "```\n",
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
      disableNextStep: true,
      allowPreviousStep: false,
      allowCopyText: true
    };
  }

  nextStep = () => {
    var nextStep = this.state.currentStep + 1;
    if ((nextStep + 1) >= this.state.lab.steps.length) {
      this.setState({disableNextStep: true});
    } else {
      console.log('Allowing nextStep of:', nextStep);
      console.log('Length of steps:', this.state.lab.steps.length);
    }
    this.setState({currentStep: nextStep});
  }

  checkForNextStep = () => {

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
        <button className='btn btn-secondary btn-spacing'disabled={this.state.allowPreviousStep}>Previous</button>
        <button className='btn btn-success btn-spacing'>Copy Text</button>
        <button className='btn btn-primary btn-spacing' onClick={this.checkResults} >Check Results</button>
        <button className='btn btn-primary btn-spacing' onClick={this.nextStep} disabled={this.state.disableNextStep}>Next</button>
        </div>
    );
  }
}

export default App;
