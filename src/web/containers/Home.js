import Home from '../../store/hocContainers/Home';
import React, { Component } from 'react';

class H extends Component {
    render(){
        return(
        <div>asfasdfa
        {this.props.questionPaper}
        </div>);
    }
}
export default Home(H);