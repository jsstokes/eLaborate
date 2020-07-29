import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import MainPage from './pages/main-page/main-page.page';
import StudentPage from './pages/student-view/student-view.page';
import NavBar from './components/NavBar/nav-bar.component';
import { setCurrentLab } from './redux/lab/lab.actions';


import "./App.css";




class App extends React.Component {
  constructor() {
    super();
    this.state = {
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

const mapDispachToProps = dispatch => ({
  setCurrentLab: lab => dispatch(setCurrentLab(lab))
});

export default connect(null, mapDispachToProps)(App);
