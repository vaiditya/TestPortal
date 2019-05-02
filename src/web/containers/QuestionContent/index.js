import React, {Component} from 'react';
import QuestionPalette from '../../components/QuestionPalette';

class QuestionContent extends Component {

    constructor(props){	
      super(props);
      this.state={
		currentQuestionId:0,
		disableNext:false,
		disablePrevious:false
      }
    }

    onNext = () => {
		if( this.state.currentQuestionId + 1 < this.props.questions.length )
			this.setState({
				currentQuestionId:this.state.currentQuestionId + 1 ,
				disableNext:false,
				disablePrevious:false

			});
		if( this.state.currentQuestionId + 1 >= this.props.questions.length-1)
		this.setState({
			disableNext:true
		});

    }

    onPrevious= () => {
		
		if ( this.state.currentQuestionId - 1 >= 0)
			this.setState({
				currentQuestionId:this.state.currentQuestionId-1,
				disablePrevious:false,
				disableNext:false
			});
		if ( this.state.currentQuestionId - 1 <= 0)
		this.setState({
			disablePrevious:true
		});
    }
    
     
      render(){
        const {questions} = this.props;
        const { currentQuestionId, disableNext , disablePrevious } = this.state;
        return(
          <div>
            <QuestionPalette 
                questionSchema={questions[currentQuestionId]}
				onNext={this.onNext}
				disableNext={disableNext}
				onPrevious={this.onPrevious}
				disablePrevious={disablePrevious}
				clearResponse={true}
				/>
          </div>
        );
      }
    }
    export default QuestionContent;