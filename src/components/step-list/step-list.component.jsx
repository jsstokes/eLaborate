import React from 'react';

import { connect } from 'react-redux';

import Step from '../../components/step/step.component';
import './step-list.styles.css';

class StepList extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return(
            // {props.steps.map((step,index) => (
            //     <Step step={step}/>
            // ))}
            <div>{this.props.steps.map( (step,index) => (
                    <Step step={step} key={index}/>
                )

            )}</div>
        );
    }
}
export default StepList;