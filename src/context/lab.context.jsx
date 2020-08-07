import React from 'react';

const LabContext = React.createContext();

export class LabProvider extends React.Component {
    state = {
        currentLab: null,
        currentStepIndex: 0,
        setCurrentLab: lab => { this.setState({currentLab: lab})},
        setCurrentStepIndex: index => { this.setState({currentStepIndex: index})}
    }

    render() {
        return(
            <LabContext.Provider value={this.state}>
                {this.props.children}
            </LabContext.Provider>
        );
    }
}

export class LabConsumer extends React.Component {
    render() {
        return(
            <LabContext.Consumer>
                {context => this.props.children}
            </LabContext.Consumer>
        );
    }
}

export default LabContext;