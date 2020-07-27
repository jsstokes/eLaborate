import React from "react";
import ReactMarkdown from 'react-markdown';
// import CodeBlock from './CodeBlock';

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lab: {
        steps:[
          {
            title: "Step 2",
            markdown: "### Step 1 - Insert a record\n" +
            "```\n" +
            "db.mycollection.insertOne({ name: 'fred'})\n" +
            "```\n"
          }
        ]
      },
      currentStep: 0,
      simple: '# This is a header\n\nAnd this is a paragraph'
    };
  }

  render() {
    return (
      <div className="App">
      <h2>{this.state.lab.steps[0].title}</h2>
        <ReactMarkdown source={this.state.lab.steps[this.state.currentStep].markdown} ></ReactMarkdown>
        <button>Previous</button>
        <button>Copy Text</button>
        <button>Check Results</button>
        <button disabled>Next</button>
        </div>
    );
  }
}

export default App;
