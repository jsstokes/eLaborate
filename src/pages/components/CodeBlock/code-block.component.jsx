import React from 'react';
import './code-block.styles.css';

class CodeBlock extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        console.log(this.props);
        return(
            <div className='CodeBlock'>
                {this.props.value}
            </div>
        );

    }
}

export default CodeBlock;