import React from 'react';

import { connect } from 'react-redux';
import { setCurrentLab } from '../../redux/lab/lab.actions';

import Step from '../../components/step/step.component';
import './step-list.styles.css';

class StepList extends React.Component {

    constructor(props) {
        super();
    }

    stepChanged = (newStep) => {
        console.log("StepList.stepChanged - props:", this.props);
        console.log("======== StepList.stepChanged =================")
        console.log("StepList.stepChanged: ", newStep);
        console.log("StepList.stepChanged - looking for stepKey: ", newStep.stepKey);
        console.log("StepList.stepChanged: currentLab", this.props.currentLab);
        // Find the matching step and replace it
        for (var i = 0; i < this.props.currentLab.steps.length;i++) {
            if (this.props.currentLab.steps[i].stepKey === newStep.stepKey) {
                this.props.currentLab.steps[i] = newStep;
            }
        }
        this.props.setCurrentLab(this.props.currentLab);
        console.log("StepList.stepChanged:", this.props.setCurrentLab);
        console.log("======== StepList.stepChanged =================")
    }

    render() {
        return(
            <div>{this.props.steps.map( (step,index) => (
                    <Step step={step} key={index} onChange={this.stepChanged}/>
                )

            )}</div>
        );
    }
}
const mapStateToProps = state => ({
    currentLab: state.lab.currentLab
})
  
const mapDispatchToProps = dispatch => ({
    setCurrentLab: lab => dispatch(setCurrentLab(lab))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(StepList);