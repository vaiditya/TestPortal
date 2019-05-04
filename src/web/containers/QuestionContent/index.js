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

		componentDidMount(){

			//Initially disable Previous button 
			this.setState({
				disablePrevious:true
			})
		}
    onNext = ( selectedOption ) => {
			console.log(selectedOption)
		if ( selectedOption !== 99 ) {
			if ( !this.props.questions[this.state.currentQuestionId].response ) {
				this.props.questions[this.state.currentQuestionId].options[selectedOption].marked=true;
				this.props.questions[this.state.currentQuestionId].response=true;
			} else {
				const index = this.props.questions[this.state.currentQuestionId].options.findIndex( element => element.marked );
				this.props.questions[this.state.currentQuestionId].options[index].marked=false;
				this.props.questions[this.state.currentQuestionId].options[selectedOption].marked=true;
				this.props.questions[this.state.currentQuestionId].response=true;
			}
		} else {
			this.props.questions[this.state.currentQuestionId].response=false;
			this.props.questions[this.state.currentQuestionId].options=
			this.props.questions[this.state.currentQuestionId].options.map( element => {
				return { ...element , marked:false }
			});
		}
		console.log(this.props.questions[this.state.currentQuestionId].response)

		//Switch to next Question
		if( this.state.currentQuestionId + 1 < this.props.questions.length )
			this.setState({
				currentQuestionId:this.state.currentQuestionId + 1 ,
				disableNext:false,
				disablePrevious:false

			});

		//Disable Next Button on last question
		if( this.state.currentQuestionId + 1 >= this.props.questions.length-1)
		this.setState({
			disableNext:true
		});

    }

    onPrevious= ( selectedOption ) => {

		if ( selectedOption !== 99 ) {
			if ( !this.props.questions[this.state.currentQuestionId].response ) {
				this.props.questions[this.state.currentQuestionId].options[selectedOption].marked=true;
				this.props.questions[this.state.currentQuestionId].response=true;
			} else {
				const index = this.props.questions[this.state.currentQuestionId].options.find( element => element.marked );
				this.props.questions[this.state.currentQuestionId].options[index].marked=false;
				this.props.questions[this.state.currentQuestionId].options[selectedOption].marked=true;
				this.props.questions[this.state.currentQuestionId].response=true;
			}
		} else {
			this.props.questions[this.state.currentQuestionId].response=false;
			this.props.questions[this.state.currentQuestionId].options=
			this.props.questions[this.state.currentQuestionId].options.map( element => {
				return {...element , marked:false }
			});
		}

		//Switch to previous question
		if ( this.state.currentQuestionId - 1 >= 0)
			this.setState({
				currentQuestionId:this.state.currentQuestionId-1,
				disablePrevious:false,
				disableNext:false
			});

		//Disable Previous Button on first question
		if ( this.state.currentQuestionId - 1 <= 0)
		this.setState({
			disablePrevious:true
		});
    }
    
     
      render(){
        const { questions } = this.props;
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