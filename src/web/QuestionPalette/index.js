import React ,{Component} from 'react';

class QuestionPalette extends Component {

    constructor(props){	
            super(props);
                this.state ={
                    checked:0,
                    response:0,
                    review:false
                };
    }
    
    
      handleOptChange = (id) => {
            
            this.setState({
            checked:id,
            response:Number(id)
            },()=>this.props.getResponse(this.props.id,this.state.response))
            // this.setState({checked:'0'});
    
      }
    
      handleReview = (event) => {
            console.log(event.target.checked)
            this.setState({
                review:event.target.checked
            },()=>this.props.getReviewStatus(this.props.id,this.state.review))
      }
    
      handleReset = () => {
            this.setState({
                checked:0,
                response:0,
                review:false
            },()=>this.props.onReset(this.props.id));
      }
      render(){
        
        const { id , questionContent ,numberOfQuestion} = this.props;
        
        return(
          <div>
            <ul>
                <li>{questionContent.question}</li>
                {questionContent.options.map((element,index) => 
                    <OptionList 
                      id={index+1} 
                      option={element}
                      checked={questionContent.response}
                      onSelect={this.handleOptChange}/>)
                }
                {/* <label>
                  <input id='1' type="radio" onChange={this.handleOptChange} checked={questionContent.response===1}/>
                {questionContent.options[0]}
                </label>
                <label>
                  <input id='2' type="radio"  onChange={this.handleOptChange} checked={questionContent.response===2}/>
                {questionContent.options[1]}
                </label>
                <label>
                  <input id='3' type="radio" onChange={this.handleOptChange} checked={questionContent.response===3} />
                {questionContent.options[2]}
                </label>
                <label>
                  <input id='4' type="radio" onChange={this.handleOptChange} checked={questionContent.response==4} />
                {questionContent.options[3]}
                </label>
                <input id={id} type="checkbox" onChange={this.handleReview} checked={questionContent.review}/>Mark for review
                <input id={id} type="button"  value="Reset" onClick={this.handleReset} />
                */}
           </ul>
           <input type="button" value="Next" onClick={()=>{this.props.onNext(this.props.index+1,numberOfQuestion)}} />
           <input type="button" value="Previous" onClick={()=>{this.props.onPrevious(this.props.index-1)}}/>
           

          </div>
        );
      }
    }

class OptionList extends Component{
  constructor(props){
    super(props);
  }
  onSelect = (event) => {
    this.props.onSelect(event.target.id)
  }
  render(){
    return (
        <div>
        <label>
          {console.log(this.props)}
                <input id={this.props.id} type="radio" onChange={this.onSelect} checked={this.props.checked===this.props.id}/>
                {this.props.option}
                </label>
        </div>
    )
  }
}
export default QuestionPalette;   