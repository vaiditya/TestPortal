import React, { Component } from 'react';
import {BrowserRouter,Route,Switch,NavLink} from 'react-router-dom';
import H from './web/containers/Home';

import './App.css';


class App extends Component {
  // constructor(props){
  //   super(props);

  //   this.data=[
  //               {question:'question1',option1:'opt1',option2:'opt2',option3:'opt3',
  //               option4:'opt4',correct:'opt2',submitted:null,status:null},

  //               {question:'question2',option1:'opt1',option2:'opt2',option3:'opt3',
  //               option4:'opt4',correct:'opt1',submitted:null,status:null},

  //               {question:'question3',option1:'opt1',option2:'opt2',option3:'opt3',
  //               option4:'opt4',correct:'opt4',submitted:null,status:null}
  //             ];
  //   this.updateStatus=this.updateStatus.bind(this);
  //   this.handleSubmit=this.handleSubmit.bind(this);
  //   this.state={displayQuestion:true,displayResult:false};
  // }
  // updateStatus(index,marked,status){
  //   this.data[index].submitted=marked;
  //   this.data[index].status=status;

  // }
  // handleSubmit(){
  //   //return <Summary data={this.data}/>;
  //   this.setState({
  //     displayResult:true,
  //     displayQuestion:false
  //   })
  // }


  render() {
    return (

      
      // <div className="App">
      //   {this.state.displayQuestion?
      //   <DisplayQuestionPaper data={this.data}
      //   updateData={this.updateStatus}
      //   />:null}
        
      //   <input type="button" value="clicl me" onClick={this.handleSubmit}/>
      //   {this.state.displayResult?<Summary data={this.data}/>:null}
        
      // </div>
      <H/>
    );
  }
}

class DisplayQuestionPaper extends Component{
  constructor(props){
    super(props);
    this.listOfItems=[];
  }

  
  render(){
    for (let i=0;i<this.props.data.length;i++)
        this.listOfItems[i]=<DisplayItems element={this.props.data[i]}
        updateData={this.props.updateData}
        index={i}
        />;
    
    return this.listOfItems;
  }
}

class DisplayItems extends Component{
  constructor(props){
    super(props);
    this.cName1='optionClass1';
    this.cName2='optionClass1';
    this.cName3='optionClass1';
    this.cName4='optionClass1';
    this.state={
    correct:this.props.element.correct,
    }
    this.handleClick=this.handleClick.bind(this);
    
  }
  
  handleClick(event){
    if (event.target.name === this.state.correct){
      switch(event.target.id){
        case '1':
          this.cName1='optionClass2';
          break;
        case '2':
          this.cName2='optionClass2';
          break;
        case '3':
          this.cName3='optionClass2';
          break;
        case '4':
          this.cName4='optionClass2';
          break;
      }
      this.props.updateData(this.props.index,event.target.name,true);
    }
    else{
      switch(event.target.id){
        case '1':
          this.cName1='optionClass3';
          break;
        case '2':
          this.cName2='optionClass3';
          break;
        case '3':
          this.cName3='optionClass3';
          break;
        case '4':
          this.cName4='optionClass3';
          break;
      }
      this.props.updateData(this.props.index,event.target.name,false)
    }
    
    this.forceUpdate();
  
  }

  render(){
    let {element}=this.props;
    console.log(element);
    
    return(
      <div>
        <h2>{element['question']}</h2>
        <ul className='optionList'>
          <li className={this.cName1}>{element['option1']}<input id='1' type='button' value='1' 
                name={element['option1']} onClick={this.handleClick}/></li>

          <li className={this.cName2}>{element['option2']}<input id='2' type='button' value='2' 
                name={element['option2']} onClick={this.handleClick}/></li>

          <li className={this.cName3}>{element['option3']}<input id='3' type='button' value='3' 
                name={element['option3']} onClick={this.handleClick}/></li>

          <li className={this.cName4}>{element['option4']}<input id='4' type='button' value='4' 
                name={element['option4']} onClick={this.handleClick}/></li>
          
        </ul>
      </div>
    );
  }
}

class Summary extends Component{
  constructor(props){
    super(props);
    this.summarizedListOFItems=[];
  }
  render(){
    for (let i=0;i<this.props.data.length;i++)
        this.summarizedListOFItems[i]=<DisplaySummarizedItems element={this.props.data[i]}/>;
    
    return this.summarizedListOFItems;
  }
}
class DisplaySummarizedItems extends Component{
  constructor(props){
    super(props);
    
  }
  render(){
    let {element}=this.props;
    return(
      <div>
        <ul>
          <li>{element['question']}</li>
          <li>Submitted Answer:{element['submitted']}</li>
          <li>Correct Answer:{element['correct']}</li>
        </ul>
      </div>
    );
  }
}

export default App;
