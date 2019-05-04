import React, {Component} from 'react';

class QuestionPalette extends Component {

    constructor(props){	
            super(props);
                this.state ={
                    currentSelection:99,
                    reset:false,
                    markForReview:false,
                    localReviewFlag:false //required to initiate local review toggling
                };
            }
    
    toggleOption = (event) => {
        const index=Number(event.target.id)
        this.setState({
            currentSelection:index
        })
    }
    onNext = () => {

      // send marked status from state only when local state's review toggling(localReviewFlag) is enabled 
      // else send incoming review status back again
      const finalReview = this.state.localReviewFlag ? this.state.markForReview : this.props.questionSchema.review;

      //reset the values for next rendered question
      this.props.onNext( this.state.currentSelection , finalReview );
        this.setState({
            currentSelection:99,
            reset:false,
            localReviewFlag:false
        });
    }
    onPrevious = () => {

       // send marked status from state only when local state's review toggling(localReviewFlag) is enabled 
      // else send incoming review status back again
      const finalReview = this.state.localReviewFlag ? this.state.markForReview : this.props.questionSchema.review;

      //reset the values for next rendered question
      this.props.onPrevious( this.state.currentSelection , finalReview );
        this.setState({
            currentSelection:99,
            reset:false,
            localReviewFlag:false
        });
    }
    onReset = () => {
        this.setState({
            currentSelection:99,
            reset:true
        });
    }
    onMarkForReview = ( event ) => {

      //enabling local review toggling and toggling review flag
      this.setState({
          localReviewFlag:true,
          markForReview: event.target.checked
      });
  }
    
      render(){
        
        const { questionSchema } = this.props;
        return(
          <div>
              {questionSchema.question}
              <ul>
              {questionSchema.options.map( (element,index) => {
                  return (
                        <li key={index}> 
                            {/* Consisting response (in checked field) through props initially and then 
                              through state when changes happens */}
                            <input id={index} type="radio" onChange={this.toggleOption} checked={
                              this.state.currentSelection === 99 ? ( this.state.reset ? false : element.marked) : 
                              this.state.currentSelection === index
                            }/>{element.option} 
                        </li>
                        );
              })}
              </ul>
           
                <div>
                    <input type="button" value="Next" disabled={this.props.disableNext} onClick={this.onNext}/>
                    <input type="button" value="Previous" disabled={this.props.disablePrevious} onClick={this.onPrevious}/>
                    <input type="button" value="Reset" onClick={this.onReset}/>
                    {/* Consisting response (in checked field) through props initially and then 
                        through state through loacalreviewflag and markforreview flag */}
                    <input type="checkbox" checked={this.state.localReviewFlag ? 
                      this.state.markForReview : this.props.questionSchema.review
                      } onChange={this.onMarkForReview}/>Mark for Review
                </div>
            
          </div>
        );
      }
    }
    export default QuestionPalette;