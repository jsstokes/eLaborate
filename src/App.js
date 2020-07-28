import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import MainPage from './pages/main-page/main-page.page';
import StudentPage from './pages/student-view/student-view.page';
import NavBar from './components/NavBar/nav-bar.component';


import "./App.css";

const Header = () => (
  <div>
  &nbsp;&nbsp;&nbsp;<Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
    <Link to="/preview">Preview</Link>
  </div>
)


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

  render() {
    return(
      <BrowserRouter>
       <NavBar/>
        <Switch>
          <Route  exact path='/' component={MainPage}></Route>
          <Route  exact path='/preview' component={StudentPage}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
