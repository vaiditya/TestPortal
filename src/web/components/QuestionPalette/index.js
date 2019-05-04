import React, {Component} from 'react';

class QuestionPalette extends Component {

    constructor(props){	
            super(props);
                this.state ={
                    currentSelection:99,
                    reset:false
                };
            }
    
    toggleOption = (event) => {
        const index=Number(event.target.id)
        this.setState({
            currentSelection:index
        })
    }
    onNext = () => {
      this.props.onNext( this.state.currentSelection );
        this.setState({
            currentSelection:99,
            reset:false
        });
    }
    onPrevious = () => {
      this.props.onPrevious( this.state.currentSelection );
        this.setState({
            currentSelection:99,
            reset:false
        });
    }
    onReset = () => {
        this.setState({
            currentSelection:99,
            reset:true
        });
    }

    
      render(){
        
        const { questionSchema, clearResponse } = this.props;
        return(
          <div>
              {questionSchema.question}
              <ul>
              {questionSchema.options.map( (element,index) => {
                  return (
                        <li key={index}> 
                            <input id={index} type="radio" onChange={this.toggleOption} checked={
                              this.state.currentSelection === 99 ? ( this.state.reset ? false : element.marked) : 
                              this.state.currentSelection === index
                            }/>{element.option} 
                        </li>
                        );
              })}
              </ul>
            {/* <ul>
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
                <input id={id} type="checkbox" onChange={this.handleReview} checked={questionContent.review}/>Mark for review
                <input id={id} type="button"  value="Reset" onClick={this.handleReset} />
           </ul> */}
                <div>
                    <input type="button" value="Next" disabled={this.props.disableNext} onClick={this.onNext}/>
                    <input type="button" value="Previous" disabled={this.props.disablePrevious} onClick={this.onPrevious}/>
                    <input type="button" value="Reset" onClick={this.onReset}/>
                    
                </div>
            
          </div>
        );
      }
    }
    export default QuestionPalette;