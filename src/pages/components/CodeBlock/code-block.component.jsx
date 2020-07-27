import React from 'react';
import './code-block.styles.css';

class CodeBlock extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
            <div className='CodeBlock'>
                <pre>
                    {this.props.value}
                </pre>
            </div>
        );

    }
}

export default CodeBlock;