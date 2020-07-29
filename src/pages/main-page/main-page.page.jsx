import React from 'react';
import { connect } from 'react-redux';

import {Button} from 'react-bootstrap';

import setCurrentLab  from '../../redux/lab/lab.actions';

import './main-page.styles.css';


class MainPage extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super();
        
    }

    testClick = () => {
        console.log("Test Button clicked");
        const junk = {
                steps:[
                  {
                    title: "Sample Lab Step 1 from Redux",
                    markdown: "### Step 1 - Insert a record\n" +
                    "testing adding some text\n" +
                    "testing adding some text\n" +
                    "### Heoping Kiley get Dallas" +
                    "testing adding some text\n `asdasdfasdf`\n" +
                    "```\n" +
                    "db.mycollection.insertOne({ name: 'fred'})\n" +
                    "```\n",
                    copyText: "db.mycollection.insertOne({ name: 'fred'})",
                    checkResults: "asfasdf"
                  },
                  {
                    title: "Sample Lab Step 2",
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
              }

        this.props.setCurrentLab(junk);

    }

    render() {
        if (this.props.currentLab == null) {
            return(
            <div>
                No Lab Selected<br/>
                <Button onClick={this.testClick}>Test this</Button>
            </div>);
        }
        return(
            <div className="container">Main Page</div>
        );
    }

}

const mapStateToProps = state => ({
    currentLab: state.lab.currentLab
  })

const matchDispatchToProps = dispatch => ({
    setCurrentLab: lab => dispatch(setCurrentLab(lab))
})


export default connect(mapStateToProps, matchDispatchToProps)(MainPage);