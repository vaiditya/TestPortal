import React, { Component } from 'react';
import { connect } from 'react-redux';

const Home = Component => {
    
    class extends Component{
    render(){
        return <Component {...this.props}/>
    }

}
}
const matchStateToProps = ({questionPaper}) => ({questionPaper});
// const matchDispatchToProps = dispatch => {
    
// }
export default connect(
    matchStateToProps,
    null
    )(Home);