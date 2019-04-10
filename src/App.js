

import React, {Component} from 'react';


 const data=[
  { id : 'q1', question:'question1',option1:'opt1',option2:'opt2',option3:'opt3',
option4:'opt4',correct:'opt2',response:null},

{ id : 'q2', question:'question2',option1:'opt1',option2:'opt2',option3:'opt3',
option4:'opt4',correct:'opt2',response:null},

{id : 'q3', question:'question3',option1:'opt1',option2:'opt2',option3:'opt3',
option4:'opt4',correct:'opt2',response:null},

{id : 'q4', question:'question4',option1:'opt1',option2:'opt2',option3:'opt3',
option4:'opt4',correct:'opt2',response:null},

{id : 'q5', question:'question5',option1:'opt1',option2:'opt2',option3:'opt3',
option4:'opt4',correct:'opt2',response:null},

{id : 'q6', question:'question6',option1:'opt1',option2:'opt2',option3:'opt3',
option4:'opt4',correct:'opt2',response:null}
];

const filterType = {
	marked:false,
	unmarked:false,
	review:false,
	all:true
}

class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <QuestionPaper content={data} filterType={filterType}/>
      </div>
    );
  }
}

class QuestionPaper extends Component {
  constructor(props){
	super(props);
    const data=this.props.content;
  }
	getResponse = (id1,response) => {
		console.log(id1)
		console.log(data.findIndex(id => id.id === id1))
		data[data.findIndex(id => id.id === id1)].response=response;
		console.log(data)
	}

	render(){
		
		const { content } = this.props;

		return(
		<div>
			<div>
				{content.map((element)=>
					<QustionPalette 
						id={element.id}
						questionContent={element}
						getResponse={this.getResponse}
					/>)}
			</div>
			<div>
				{content.map((element)=>
					<p>{element.id}</p>
					)}
			
			</div>
			<div>
				{/* <ApplyFilter filterType={this.props.filterType}/> */}
			</div>

		</div>
		);
	}
}

class QustionPalette extends Component {

  state ={
    checked:'0',
    response:0
  };

  componentDidUpdate(){
	this.props.getResponse(this.props.id,this.state.response);
  }

  handleChange = (event) => {
    let id=event.target.id;
    this.setState({
      checked:id,
      response:Number(id)
    })
  }
  render(){

    const { questionContent } = this.props;
    return(
      <div>
        <ul>
            <li>{questionContent.question}</li>
            <label>
              <input id='1' type="radio" onChange={this.handleChange} checked={this.state.checked==='1'}/>
              {questionContent.option1}
            </label>
            <label>
              <input id='2' type="radio"  onChange={this.handleChange} checked={this.state.checked==='2'}/>
              {questionContent.option2}
            </label>
            <label>
              <input id='3' type="radio" onChange={this.handleChange} checked={this.state.checked==='3'} />
              {questionContent.option3}
            </label>
            <label>
              <input  id='4' type="radio" onChange={this.handleChange} checked={this.state.checked==='4'} />
              {questionContent.option4}
            </label>
       </ul>
      </div>
    );
  }
}





export default App;
