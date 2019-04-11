
import React, {Component} from 'react';

 


class App extends Component {
  constructor(props){
	super(props);
	this.state={
		data:[
		{ id : 'q1', question:'question1',option1:'opt1',option2:'opt2',option3:'opt3',
		option4:'opt4',correct:'opt2',response:0,review:false},
		
		{ id : 'q2', question:'question2',option1:'opt1',option2:'opt2',option3:'opt3',
		option4:'opt4',correct:'opt2',response:0,review:false},
		
		{id : 'q3', question:'question3',option1:'opt1',option2:'opt2',option3:'opt3',
		option4:'opt4',correct:'opt2',response:0,review:false},
		
		{id : 'q4', question:'question4',option1:'opt1',option2:'opt2',option3:'opt3',
		option4:'opt4',correct:'opt2',response:0,review:false},
		
		{id : 'q5', question:'question5',option1:'opt1',option2:'opt2',option3:'opt3',
		option4:'opt4',correct:'opt2',response:0,review:false},
		
		{id : 'q6', question:'question6',option1:'opt1',option2:'opt2',option3:'opt3',
		option4:'opt4',correct:'opt2',response:0,review:false},
		]
	};
  }
	getResponse = (Id,response) => {
		this.state.data[this.state.data.findIndex(element => element.id === Id)].response=response;
	}
	getReviewStatus = (Id,review) => {
		this.state.data[this.state.data.findIndex(element => element.id === Id)].review=review;	
	}
	


	render(){
		return(
		<div>
			<QuestionPaper 
				content={this.state.data} 
				getResponse={this.getResponse}
				getReviewStatus={this.getReviewStatus}
				/>
		</div>
		);
	}
}

class QuestionPaper extends Component {
  constructor(props){
	super(props);
	this.state={
		marked:'all'
		}
	}
  

  getFilter = (markedFilter) => {
	this.setState({
		marked:markedFilter
	});
  }
	
	render(){
		
		const { content } = this.props;
		const { marked } = this.state;
		let updatedContent =[];
		console.log(this.state.marked)
		switch(marked){
			case "mark":
				updatedContent=content.filter( element => (element.response !==0 && !element.review ))
				break;
			case "unmark":
				updatedContent=content.filter( element => (element.response === 0 && !element.review )).map(function(element){
						return ({...element,response:0})
					}
				)
				break;
			case "review":
				updatedContent=content.filter( element => ( element.review ))
				break;
			case "all":
				updatedContent=content
				break;

		}
		console.log(this.props.content)
		
		console.log(updatedContent)
		return(
		<div>
			<div>
				{updatedContent.map((element)=>
					<QustionPalette 
						id={element.id}
						questionContent={element}
						getResponse={this.props.getResponse}
						getReviewStatus={this.props.getReviewStatus}
					/>)}
				
			</div>
			<div>
				{updatedContent.map((element)=>
					<p>{element.id}</p>
					)}
			
			</div>
			<div>
				<ApplyFilter 
					filterType={this.state.marked} 
					getFilter={this.getFilter}
					/>
			</div>

		</div>
		);
	}
}

class ApplyFilter extends Component {
	constructor (props){
		super(props);
		const { filterType } = this.props
		this.state={
			mark:filterType,
		}
	}

	handleFilter = (event) => {
		this.setState({mark:event.target.id},() => this.props.getFilter(this.state.mark));
	}
	// componentDidUpdate(){
	// 	this.props.getFilter(this.state.mark)
	// }
	render(){
		return(
			<div>
				<input id="mark" type="radio" onChange={this.handleFilter} checked={this.state.mark==='mark'}/>Marked
				<input id="unmark" type="radio" onChange={this.handleFilter} checked={this.state.mark==='unmark'}/>Unmarked
				<input id="review" type="radio" onChange={this.handleFilter} checked={this.state.mark==='review'}/>Marked for review
				<input id="all" type="radio" onChange={this.handleFilter} checked={this.state.mark==='all'}/>All
			</div>
		);
	}
}

class QustionPalette extends Component {

constructor(props){	
		super(props);
			this.state ={
				checked:'0',
				response:null,
				review:false
			};
}

  componentDidUpdate(){
	
	//this.props.getResponse(this.props.id,this.state.response);
	this.props.getReviewStatus(this.props.id,this.state.review);
  }

  handleOptChange = (event) => {
		let id=event.target.id;
		this.setState({
		checked:id,
		response:Number(id)
		},()=>this.props.getResponse(this.props.id,this.state.response))
		// this.setState({checked:'0'});

  }

  handleReview = (event) => {
		this.setState({
			review:event.target.checked
		})
  }

  handleReset = () => {
		this.setState({
			checked:'0',
			response:null,
			review:false
		});
  }
  render(){
	console.log(this.props)
	const { id,questionContent } = this.props;
	console.log(id,this.state.checked);
    return(
      <div>
        <ul>
            <li>{questionContent.question}</li>
            <label>
              <input id='1' type="radio" onChange={this.handleOptChange} checked={this.state.checked==='1'}/>
              {questionContent.option1}
            </label>
            <label>
              <input id='2' type="radio"  onChange={this.handleOptChange} checked={this.state.checked==='2'}/>
              {questionContent.option2}
            </label>
            <label>
              <input id='3' type="radio" onChange={this.handleOptChange} checked={this.state.checked==='3'} />
              {questionContent.option3}
            </label>
            <label>
              <input id='4' type="radio" onChange={this.handleOptChange} checked={this.state.checked==='4'} />
              {questionContent.option4}
            </label>
			<input id={id} type="checkbox" onChange={this.handleReview} checked={this.state.review}/>Mark for review
			<input id={id} type="button"  value="Reset" onClick={this.handleReset} />
       </ul>
      </div>
    );
  }
}





export default App;
